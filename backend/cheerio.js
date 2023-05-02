import cheerio from "cheerio";
import axios from "axios";

export const createMessage = async (myUrl) => {
    
    let key = ""
    let value = ""
    let arr = []
    let obj = {}
   
    const result = await axios.get(myUrl)
   

    // 3. 스크래핑 결과에서 og 코드 골라내서 변수에 저장하기
    const $ = cheerio.load(result.data)
    $("meta").each((i, el) => {
        if($(el).attr("property") && $(el).attr("property").includes("og:")){
            const key = $(el).attr("property")
            const value = $(el).attr("content")
            obj[key] = value
            
        }
    })
    

    return obj

}