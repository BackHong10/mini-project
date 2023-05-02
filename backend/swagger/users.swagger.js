/**
 * @swagger
 * /users:
 *   get:
 *     summary: 유저 정보 가져오기
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: 철수
 *                   email:
 *                     type: string
 *                     example: "a@a.com"
 *                   personal:
 *                     type: string
 *                     example: 221111-1234567
 *                   prefer:
 *                     type: string
 *                     example: https://www.naver.com
 *                   pwd:
 *                      type: string
 *                      example: 1234
 *                   phone:
 *                      type: string
 *                      example: "01012345678"
 *                   og:
 *                      type: object
 *                      example: {
 *                          title: 네이버,
 *                          description: 네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요,
 *                          image: https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png
 * 
 *                              }
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: 회원가입 하기
 *     tags: [Users]   
 *     requestBody:
 *          description: 아래 값들을 채워서 전송, 응답으로 DB의 id 출력 (유저 등록)
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              default: 철수
 *                              type: string
 *                              description: "이름"
 *                          pNum:
 *                              default: 220209-1227015
 *                              type: string
 *                              description: "주민등록번호"
 *                          email:
 *                              default: fhwm0241@gmail.com
 *                              type: string
 *                              description: "이메일"    
 *                          site:
 *                              default: https://www.naver.com
 *                              type: string
 *                              description: "좋아하는 사이트"
 *                          pw:
 *                              default: 1234
 *                              type: string
 *                              description: "비밀번호"
 *                          phone:
 *                              default: "01049192767"
 *                              type: string
 *                              description: "전화번호"
 *     responses:
 *        200:
 *          description: 성공
 *          content:
 *           application/json:
 *             schema:
 *               type: string
 *               default: 61ee1b7272a81036fc429a05
 */


