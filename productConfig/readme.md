# Product Config API
## Business Rules 

  * This is first rule.
  * It is another rule.

## To Run

  ```
  npm install -g jasmine-node
  npm install
  jasmine-node . --config folder productConfig
  ```

## Automated Test Cases
01. Call WAYNEENTERPRISES/PRE-C/SAT/SATSGT and make sure response code is 200 and response contain data from Biz level config.

 ```
  * method: GET
  * status: 200
  * path: productconfig/WAYNEENTERPRISES/PRE-C/SAT/SATSGT
 ```
02. Call InvalidWAYNEENTERPRISES/PRE-C/SAT/SATSGT and make sure response code is 404 and response contain proper error message.

 ```
  * method: GET
  * status: 404
  * path: productconfig/InvalidWAYNEENTERPRISES/PRE-C/SAT/SATSGT
 ```
03. Call WAYNEENTERPRISES/NURSING/NCLEX/NCLEXP and make sure response code is 200 and response contain marged content from both Biz and Sbu level config.

 ```
  * method: GET
  * status: 200
  * path: productconfig/WAYNEENTERPRISES/NURSING/NCLEX/NCLEXP
 ```
04. Call WANEENTERPRISES/InvalidNURSING/NCLEX/NCLEXP and make sure response code is 200 and response contain content only from Biz level config.

 ```
  * method: GET
  * status: 200
  * path: productconfig/WAYNEENTERPRISES/InvalidNURSING/NCLEX/NCLEXP
 ```
05. Call WAYNEENTERPRISES/K12/K12PRECO/KSPSATKT and make sure response code is 200 and response contain overwrite array content from Program level config.

 ```
  * method: GET
  * status: 200
  * path: productconfig/WAYNEENTERPRISES/K12/K12PRECO/KSPSATKT
 ```
06. Call WAYNEENTERPRISES/K12/InvalidK12PRECO/KSPSATKT and make sure response code is 200 and response contain content only from Biz level config.

 ```
  * method: GET
  * status: 200
  * path: productconfig/WAYNEENTERPRISES/K12/InvalidK12PRECO/KSPSATKT
 ```
07. Call WAYNEENTERPRISES/HEALTH/IELTS/IELTSOS and make sure response code is 200 and response contain marged content from both Biz and Product level config.

 ```
  * method: GET
  * status: 200
  * path: productconfig/WAYNEENTERPRISES/HEALTH/IELTS/IELTSOS
 ```
08. Call WAYNEENTERPRISES/HEALTH/IELTS/InvalidIELTSOS and make sure response code is 200 and response contain content only from Biz level config.

 ```
  * method: GET
  * status: 200
  * path: productconfig/WAYNEENTERPRISES/HEALTH/IELTS/InvalidIELTSOS
 ```
09. Call WAYNEENTERPRISES/GRAD/GRE/GRENC and make sure response code is 200 and response contain marged content from all Biz, Sbu, Program and Product level config.

 ```
  * method: GET
  * status: 200
  * path: productconfig/WAYNEENTERPRISES/GRAD/GRE/GRENC
 ```
10. Call WAYNEENTERPRISES/GRAD/GRE/GRENC without atom-api-key and make sure response code is 401 and response proper error message.

 ```
  * method: GET
  * status: 401
  * path: productconfig/WAYNEENTERPRISES/GRAD/GRE/GRENC
 ```
11. Call WAYNEENTERPRISES/GRAD/GRE/GRENC with invalid atom-api-key and make sure response code is 401 and response proper error message.

 ```
  * method: GET
  * status: 401
  * path: productconfig/WAYNEENTERPRISES/GRAD/GRE/GRENC
 ```
12. Call WAYNEENTERPRISES/GRAD/GRE/GRENC without Authorization Bearer Token and make sure response code is 401 and response proper error message.

 ```
  * method: GET
  * status: 401
  * path: productconfig/WAYNEENTERPRISES/GRAD/GRE/GRENC
 ```
13. Call WAYNEENTERPRISES/GRAD/GRE/GRENC with invalid Authorization Bearer Token using invalid appId and make sure response code is 404 and response proper error message.

 ```
  * method: GET
  * status: 404
  * path: productconfig/WAYNEENTERPRISES/GRAD/GRE/GRENC
 ```
13.1. Call WAYNEENTERPRISES/GRAD/GRE/GRENC with invalid Authorization Bearer Token using no appId and make sure response code is 403 and response proper error message.

 ```
  * method: GET
  * status: 403
  * path: productconfig/WAYNEENTERPRISES/GRAD/GRE/GRENC
 ```
15. Call WAYNEENTERPRISES/GRAD/InvalidGRE/GRENC and make sure response code is 200 and response contain content only from Biz and Sbu level config.

 ```
  * method: GET
  * status: 200
  * path: productconfig/WAYNEENTERPRISES/GRAD/InvalidGRE/GRENC
 ```
14. Call WAYNEENTERPRISES/GRAD/GRE/InvalidGRENC and make sure response code is 200 and response contain content only from Biz, Sbu and Program level config.

 ```
  * method: GET
  * status: 200
  * path: productconfig/WAYNEENTERPRISES/GRAD/GRE/InvalidGRENC
 ```
16. Call WAYNEENTERPRISES/InvalidGRAD/GRE/GRENC and make sure response code is 200 and response contain content only from Biz level config.

 ```
  * method: GET
  * status: 200
  * path: productconfig/WAYNEENTERPRISES/InvalidGRAD/GRE/GRENC
 ```
17. Call WAYNEENTERPRISES/GRADM/GRADMP/GRADMPROD and make sure response code is 500 and response contain proper error message.

 ```
  * method: GET
  * status: 500
  * path: productconfig/WAYNEENTERPRISES/GRADM/GRADMP/GRADMPROD
 ```
18. Call WAYNEENTERPRISES/GRADM2/GRADMP/GRADMPROD and make sure response code is 500 and response contain proper error message.

 ```
  * method: GET
  * status: 500
  * path: productconfig/WAYNEENTERPRISES/GRADM2/GRADMP/GRADMPROD
 ```
19. Call WAYNEENTERPRISES/GRADM2/InvalidGRADMP/GRADMPROD and make sure response code is 200 and response contain content only from Biz and Sbu level config.

 ```
  * method: GET
  * status: 200
  * path: productconfig/WAYNEENTERPRISES/GRADM2/InvalidGRADMP/GRADMPROD
 ```
20. Call WAYNEENTERPRISES/GRADM3/GRADMP/GRADMPROD and make sure response code is 500 and response contain proper error message.

 ```
  * method: GET
  * status: 500
  * path: productconfig/WAYNEENTERPRISES/GRADM3/GRADMP/GRADMPROD
 ```
21. Call WAYNEENTERPRISES/GRADM3/GRADMP/InvalidGRADMPROD and make sure response code is 200 and response contain content only from Biz, Sbu and program level config.

 ```
  * method: GET
  * status: 200
  * path: productconfig/WAYNEENTERPRISES/GRADM3/GRADMP/InvalidGRADMPROD
 ```
