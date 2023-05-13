//configurações básicas do aplicativo
const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    res.render("home");    
});

router.get("/home", (req, res) => {
    const usuario = req.query.usuario;
    const senha = req.query.senha;
    if (usuario == "adm" && senha == "123"){
        res.redirect("/principal")
    } else{
        res.redirect("/erro")
    }
});
 
router.get("/principal", (req, res) => {
    res.render("principal")
});  

router.get("/erro", (req, res) => {
    res.render("home", {
        "resultado": "Dados inválidos"
    })
});  
 
router.get("/tabuada", (req, res) => {
    res.render("tabuada", {"Tabuada": ""});
  });
  
  router.get("/Calculatabuada", (req, res) => {
    let num = Number(req.query.num);
    let resp = "";
  
    if (isNaN(num)) {
      resp = "Por favor, informe um número válido.";
    } else {
      for (let i = 0; i <= 10; i++) {
        let resultado = num * i;
        resp += num + " X " + i + " = " + resultado + "<br>";
      }
    } 
  
    res.send(resp); 
  });  
   
 
   
router.get("/calculo", (req, res) => {  
    res.render("calculo", { "dado1": "" });  
});   
  


router.get("/calculoExecutar", (req, res) => {
    n1 = Number(req.query.num1);
    n2 = Number(req.query.num2);
    op = req.query.calc;
    switch (op){ 
        case '+':
            vres = n1 + n2;
            break; 
        case '-':
            vres = n1 - n2;
            break; 
        case '*':
            vres = n1 * n2;
            break; 
        case '/':
            vres = n1 / n2;
            break; 
    }

    res.render('calculo', 
    { "dado1": "Num1 = "+n1
    + " Num2 = "+ n2
    + " Operação = "+ op
    + " Resultado = " + vres 
    }
);
     
});
 

module.exports = router;