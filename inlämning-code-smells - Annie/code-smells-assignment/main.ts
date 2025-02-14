/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

  function getLength(jumpings: number[]): number {
    let totalNumber = 0;
  
    totalNumber = jumpings.reduce( function(jumpDistanceSoFar, currentJump) {
      return jumpDistanceSoFar + currentJump;
    }
    );
  
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
    student.passed =
      student.name == "Sebastian"
         student.handedInOnTime;
          true
          false
  }  
    if (student.passed === true) {
      return "VG";
    } else {
      return "IG";
    }
  
  
  /*
    3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
    Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
    */
  
  class Temp {
    constructor(public airquality: string, public when: Date, public visability: number) {}
  }
  
  function averageWeeklyTemperature(heights: Temp[]) {
    let result = 0;
  
    for (let i = 0; i < heights.length; i++) {
      if (heights[i].airquality === "Stockholm") {
        if (heights[i].when.getTime() > Date.now() - 604800000) {
          result += heights[i].visability;
        }
      }
    }
  
    return result / 7;
  }
  
  /*
    4. Följande funktion kommer att presentera ett objekt i dom:en. 
    Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
    */
  

  
  class Product {
    constructor(
      public name: string,
      public price: number,
      public amount: number,
      public description: string,
      public image: string,
      public parent: HTMLElement 
    )
  }
  const product1 = new Product(
    "namn på produkt1",
    //priset,
    //antalet,
    //Beskrivning (inom en sträng);
    //Sträng med bildlänk
    //Parent-elemenmten
  )
  const product2 = new Product(
    "namn på produkt2",
    //priset,
    //antalet,
    //Beskrivning (inom en sträng);
    //Sträng med bildlänk
    //Parent-elemenmten
  )
  const product3 = new Product(
    "namn på produkt3",
    //priset,
    //antalet,
    //Beskrivning (inom en sträng);
    //Sträng med bildlänk
    //Parent-elemenmten
  )
  const productlist: Product[] = [
    product1,
    product2,
    product3
  ]

  let container = document.createElement("div");

  const createProducts = () => {
    container.innerHTML = "";

    productlist.forEach((Product) => {
      const productInfo = document.createElement("div");
      productInfo.innerHTML = `
         <h4>${Product.name}</h4>
         <strong>${Product.price}</strong>
         <img src="${Product.image}">
      `
    })
    createProducts();
  }
  /*
    5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
    går att göra betydligt bättre. Gör om så många som du kan hitta!
    */
  function presentStudents(allStudents: Student[]) {
    for (const student of allStudents) {
      if (student.handedInOnTime) {
        let container = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = true;
  
        container.appendChild(checkbox);
        let passedStudents = document.querySelector("ul#passedstudents");
        passedStudents?.appendChild(container);
      } 
      else {
        let container = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = false;
  
        container.appendChild(checkbox);
        let failedStudents = document.querySelector("ul#failedstudents");
        failedStudents?.appendChild(container);
      }
    }
  }
  
  /*
    6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
    Lorem, ipsum, dolor, sit, amet
    Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
    */
  function concatenateStrings() {
    let myArray = ["Lorem ", "ipsum ", "dolor ", "sit ", "amet "]

    let result = myArray.join("")

    
    return result;
  }
  
  /* 
  7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
      Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
      fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
      lösning som är hållbar och skalar bättre. 
  */
  class User {
    name: string;
    birthday: Date;
    email: string;
    password: string;
  } 

  
    // Validation
  
    let ageDiff = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDiff);
    let userAge = Math.abs(ageDate.getUTCFullYear() - 1970);

     
    console.log(userAge);

    const user1 = new User(
      //Namn (sträng),
      //Födelsedag (sträng),
      //Email (sträng),
      //Lösenord (sträng)
    )

    if ((userAge < 20)) {
      // Logik för att skapa en användare
    } else {
      return "Du är under 20 år";
    }
  
  