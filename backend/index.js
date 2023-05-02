import express from 'express'
import {checkPhone,getToken,sendTokenToSMS,saveTokenData} from './phone.js'
import {checkEmail,getWelcomeTemplate,sendTemplateToEmail,saveUserData} from "./email.js"
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import {options} from './swagger/config.js'
import cors from 'cors'
import mongoose from 'mongoose'
import { Token } from './model/token.model.js'
import { Users } from './model/user.model.js'
import {createMessage} from "./cheerio.js"
import 'dotenv/config'




const app = express()
app.use(express.json())
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.get('/users', async (req, res) => {
    const result = await Users.find()
    
    res.send(result)
    
})

app.post("/users", async (req,res) => {
    
    const {name,pNum,phone,site,pw,email} = req.body
    const isValid = checkEmail(email)

    if(isValid === false) return res.send("이메일을 제대로 입력해주세요")

    const result = await Token.findOne({phone: phone})
    const obj = await createMessage(site)

    if(!result || result.isAuth === false){
      res.status(422)
      res.send("에러!! 핸드폰 번호가 인증되지 않습니다.")
      return
    }
    else {
      await saveUserData({name,pNum,phone,site,pw,email,obj})
    }

    const userResult = await Users.findOne({phone : phone})
    const myTemplate = getWelcomeTemplate({name, phone, site})
  
    await sendTemplateToEmail(email,myTemplate)
    res.send(userResult._id)

})

app.post("/tokens/phone", async (req,res) => {
  const myPhone = req.body.phone;
  const myToken = getToken()
  let isValid = checkPhone(myPhone)

  if(isValid === false) return res.send("핸드폰 번호를 확인해주세요")
  
  const result = await Token.findOne({phone: myPhone})

  if(!result){
    await saveTokenData({myToken,myPhone})
    console.log("전체를 저장합니다.")
  }
  else{
    await Token.updateOne({phone: myPhone},{token: myToken, isAuth : false})
    console.log("토큰을 저장합니다.")
  }

  sendTokenToSMS(myPhone,myToken)
  res.send(`${myPhone}으로 인증 문자가 전송되었습니다.`)

  
})

app.patch("/tokens/phone", async (req,res) => {
  console.log(req.body.token,req.body.phone)
  const result = await Token.findOne({phone : req.body.phone})
  
  if(!result || result.token !== req.body.token){
    res.send("false")
  }
  else{
    await Token.updateOne({phone: req.body.phone},{isAuth: true})
    res.send("true")
  }
  
})

mongoose.connect("mongodb://mini-database:27017/mydocker01").then(() => {
  console.log("접속 성공")
})



app.listen(4000, () => {
  console.log(`백엔드 api 서버가 켜졌어요`)
})

