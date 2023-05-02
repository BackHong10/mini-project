// 휴대폰 인증 토큰 전송API를 요청해주세요.
const getValidationNumber = async () => {
  document.querySelector("#ValidationInputWrapper").style.display = "flex";
  const phoneNum1 = document.getElementById("PhoneNumber01").value
  const phoneNum2 = document.getElementById("PhoneNumber02").value
  const phoneNum3 = document.getElementById("PhoneNumber03").value
  const phoneNum = phoneNum1 + phoneNum2 + phoneNum3
  const result = await axios.post("http://localhost:4000/tokens/phone",{
    phone: phoneNum
  }).then((res) => {
    console.log("인증 번호 전송");
  })
  
};

// 핸드폰 인증 완료 API를 요청해주세요.
const submitToken = async () => {
  const myToken = document.getElementById("TokenInput").value
  const phoneNum1 = document.getElementById("PhoneNumber01").value
  const phoneNum2 = document.getElementById("PhoneNumber02").value
  const phoneNum3 = document.getElementById("PhoneNumber03").value
  const phoneNum = phoneNum1 + phoneNum2 + phoneNum3
  
  axios.patch("http://localhost:4000/tokens/phone",{
    phone: phoneNum,
    token: myToken
  }).then((res) => {
    if(res.data === true){
      alert("인증성공")
    }
    else{
      alert("인증실패")
    }
  })
  
};

// 회원 가입 API를 요청해주세요.
const submitSignup = async () => {
  console.log('회원 가입 이메일 전송')
  const name = document.getElementById("SignupName").value
  const pNum1 = document.getElementById("SignupPersonal1").value
  const pNum2 = document.getElementById("SignupPersonal2").value
  const pNum = pNum1 + "-" + pNum2
  const phoneNum1 = document.getElementById("PhoneNumber01").value
  const phoneNum2 = document.getElementById("PhoneNumber02").value
  const phoneNum3 = document.getElementById("PhoneNumber03").value
  const phoneNum = phoneNum1 + phoneNum2 + phoneNum3
  const site = document.getElementById("SignupPrefer").value
  const email = document.getElementById("SignupEmail").value;
  const pw = document.getElementById("SignupPwd").value
  const result = axios.post("http://localhost:4000/users",{
    name: name,
    pNum : pNum,
    phone: phoneNum,
    site: site,
    pw: pw,
    email: email


  }).then((res) => {
    
      console.log("회원 가입 완료");
    
  })
  
};
