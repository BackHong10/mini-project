/**
 * @swagger
 * /tokens/phone:
 *   patch:
 *     summary: 인증번호 확인
 *     tags: [Tokens]
 *     requestBody:
 *          description: 자신의 번호와 인증번호 전송 (인증번호 확인)
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          phone:
 *                              default: "01049192767"
 *                              type: string
 *                              description: 전화번호
 *                          token:
 *                              default: 123456
 *                              type: string
 *                              description: 인증번호
 *     responses:
 *        200:
 *          description: 성공
 *          content:
 *           application/json:
 *             schema:
 *               type: string
 *               default: true
 */

/**
 * @swagger
 * /tokens/phone:
 *   post:
 *     summary: 인증번호 전송
 *     tags: [Tokens]
 *     requestBody:
 *          description: 자신의 전화번호를 전송 (인증번호 받기)
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          phone:
 *                              default: "01049192767"
 *                              type: string
 *                              description: 전화번호
 *     responses:
 *        200:
 *          description: 성공
 *          content:
 *           application/json:
 *             schema:
 *               type: string
 *               default: 000-0000-0000으로 인증문자가 전송되었습니다.
 */