/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

  function getLength(jumps: number[]): number {

   let totalNumber = jumps.reduce(
      (jumpDistanceSoFar, currentJump) => jumpDistanceSoFar + currentJump, 0
    );
  
    return totalNumber;
  }
  
  /*
    2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
    */
  
  class Student {
    constructor(
      public name: string,
      public handedInOnTime: boolean,
      public passed: boolean
    ) {}
  }
  
  function getStudentStatus(student: Student): string {
    const passed =  student.name === "Sebastian" && student.handedInOnTime;
    return passed ? "VG" : "IG"
  }
  
  /*
    3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
    Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
    */
  
  class Temp {
    constructor(public city: string, public date: Date, public degrees: number) {}
  }
  
  function averageWeeklyTemperature(temps: Temp[]): number {
    const currentTemp = [{city: "Stockholm", date: Date.now()},
      {city: "Göteborg", date: Date.now()}
    ]

    const oneWeekAgo = Date.now() - 60480000;

    const recentTemp = currentTemp.filter(ct. => ct.date.getTime() > oneWeekAgo); //ct är en parameter för "currentTemp"
  
    return recentTemp
  
  }
  
  /*
    4. Följande funktion kommer att presentera ett objekt i dom:en. 
    Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
    */
  
    class Product {
        constructor (public name: string, public price: number, public amount: number,
                     public description: string, public image: string,public parent: HTMLElement) {
            this.name = name;
            this.price = price;
            this.amount = amount;
            this.description = description;
            this.image = image;
            this.parent = parent;
          }
    }
    const products = [
      new Product("Tandborste", 20, 5, "En vanlig tandborste", "Bild", document.body),
      new Product("Tandkräm", 15, 4, "Colgate", "Bild", document.body),
      new Product("Tandtråd", 20, 5, "Tandtråd", "Bild på tandråd", document.body)
    ]
  function showProduct() {
    products.forEach(product => {
      let container = document.createElement("div");
      let title = document.createElement("h4");
      let pris = document.createElement("strong");
      let imageTag = document.createElement("img");
  

      title.innerHTML = product.name;
      pris.innerHTML = product.price.toString();
      imageTag.src = product.image;
  
      container.appendChild(title);
      container.appendChild(imageTag);
      container.appendChild(pris);
      product.parent.appendChild(container);
    })
  }
    showProduct();
  /*
    5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
    går att göra betydligt bättre. Gör om så många som du kan hitta!
    */
  function presentStudents(students: Student[]) {
    for (let i = 0; i < students.length; i++) {
      student.handedInOnTime = student.name;
      return student.handedInOnTime ?
        let container = document.createElement("div");
        container.innerHTML = `<input type="checkbox" checked>`

        let listOfStudents = document.querySelector("ul#passedstudents")
        listOfStudents?.appendChild(container)
      :
        let container = document.createElement("div");
        container.innerHTML = `<input type="checkbox">`;
  
        let listOfStudents = document.querySelector("ul#failedstudents")
        listOfStudents?.appendChild(container)
      }
    }
  
  /*
    6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
    Lorem, ipsum, dolor, sit, amet
    Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
    */

    function concatenateStrings() {
    let myArray = ["Lorem ", "ipsum ", "dolor ", "sit ", "amet "]

    let result = myArray.join(" ")

    
    return result;
  }
  
  
  
  /* 
  7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
      Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
      fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
      lösning som är hållbar och skalar bättre. 
  */
 class User {
    constructor(public name: string, public birthday: Date, public email: string, public password: string) {
    }
 }
 function verifyAge(birthday: Date): boolean {
    let ageDiff = Date.now() - birthday.getTime();
    let age = new Date(ageDiff).getUTCFullYear() - 1970;
    return age >= 20;
 }
  function createUser(userData: {name: string; birthday: Date; email: string; password: string}) {
    // Validation

    if (!verifyAge(userData.birthday)) {
      return "Du är user 20 år";
    }
    else
      const user = new User(userData.name, userData.birthday, userData.email, userData.password) 

      return user;
    

  }
  