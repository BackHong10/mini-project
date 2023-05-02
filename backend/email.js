import {getToday} from "./utils.js"
import nodemailer from 'nodemailer'
import {Users} from "./model/user.model.js"


export function checkEmail(email){
    if(!email.includes("@") || email === undefined){
        console.log("이메일을 제대로 확인해주세요")
        return false
    }
    else{
        return true
    }
    

}
export function getWelcomeTemplate({name, phone, site}){
    const myTemplate = `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다.</h1>
                <hr/>
                <div>이름: ${name}</div>
                <div>전화번호: ${phone}</div>
                <div>좋아하는 사이트: ${site}</div>
                <div>가입일: ${getToday()}</div>
            </body>
        </html>
    `
    return myTemplate
}

export async function sendTemplateToEmail(email, myTemplate){
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const EMAIL_SENDER = process.env.EMAIL_SENDER;

    const transPorter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
        }
    })
    const result = await transPorter.sendMail({
        from: EMAIL_SENDER,
        to: email,
        subject: "[코드캠프] 가입을 축하합니다!!",
        html: myTemplate

    })
    

    // console.log(`${email}로 가입환영템플릿 ${myTemplate}을 전송합니다.`)

}

export async function saveUserData({name,pNum,phone,site,pw,email,obj}){
    const user = new Users({
        name : name,
        email : email,
        personal : pNum.slice(0,7).padEnd(14,"*"),
        prefer : site,
        pwd: pw,
        phone: phone,
        og: {
          title: obj['og:title'],
          description: obj['og:description'],
          image: obj['og:image']
        }
      })
        await user.save()

}