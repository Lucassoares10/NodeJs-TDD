const jwt = require("jsonwebtoken");
const { promisify } = require("util");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token not provided" });
  }

  //pular a primeira parte e pegar apenas a segunda que é o token para verificar
  const [, token] = authHeader.split(" ");

  try {
    //se decodificar o token e se for valido
    const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET);

    //ele vai pegar o id, e colocar dentro da variavel dentro do req
    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ message: "Token invalid" });
  }
};
