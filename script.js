// Helper for output
function showOutput(id, content) {
  const output = document.getElementById(id);
  output.innerHTML = content;
  output.classList.add("show");
}

// Q1
function runProblem1() {
  const states = ["Uttar Pradesh", "Odisha", "Andhra Pradesh", "Maharashtra", "Kerala", "Gujarat"];
  const filtered = states.filter(s => !/^[aeiou]/i.test(s));
  showOutput("output1", `<p class="success">${filtered.join(", ")}</p>`);
}

// Q2
function runProblem2() {
  const str = "I love my India";
  const reversed = str.split(" ").reverse().join(" ");
  showOutput("output2", `<p class="success">${reversed}</p>`);
}

// Q3
function runProblem3() {
  let arr = ["I","N","D","I","A"];
  arr.splice(3,2,"O","N","E","S","I","A");
  showOutput("output3", `<p class="success">${arr.join("")}</p>`);
}

// Q4
function runProblem4() {
  const str = "JavaScript is awesome and powerful language";
  const vowels = str.match(/[aeiou]/gi)?.length || 0;
  const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
  showOutput("output4", `<p>Vowels: <span class="success">${vowels}</span>, Consonants: <span class="success">${consonants}</span></p>`);
}

// Q5
function runProblem5() {
  function correctfn(sentence, wrong, correct) {
    return sentence.replace(new RegExp(wrong, "gi"), correct);
  }
  const result = correctfn("I lvoe coding in JS", "lvoe", "love");
  showOutput("output5", `<p class="success">${result}</p>`);
}

// Q6
function runProblem6() {
  const arr = [1,2,3,9,10,7,5,4,3];
  const result = arr.filter(n => n > 5);
  showOutput("output6", `<p class="success">${result.join(", ")}</p>`);
}

// Q7
function runProblem7() {
  const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
  ];
  const result = students.map(s => {
    const avg = s.scores.reduce((a,b)=>a+b,0)/s.scores.length;
    return { name: s.name, average: avg };
  });
  showOutput("output7", `<pre class="success">${JSON.stringify(result,null,2)}</pre>`);
}

// Q8
function runProblem8() {
  function repeatedSum(num) {
    while(num > 9) {
      num = num.toString().split("").reduce((a,b)=>a+ +b,0);
    }
    return num;
  }
  const result = repeatedSum(456);
  showOutput("output8", `<p class="success">456 → ${result}</p>`);
}

// Q9
function runProblem9() {
  const para = "This is a simple paragraph with some words to count.";
  const count = para.trim().split(/\s+/).length;
  showOutput("output9", `<p class="success">Word count: ${count}</p>`);
}

// Q10
function runProblem10() {
  const str = "Hello";
  const rev = str.split("").reverse().join("");
  showOutput("output10", `<p class="success">${rev}</p>`);
}

// Q11
function runProblem11() {
  const students = {
    student1: { subject1:44, subject2:56, subject3:87, subject4:97, subject5:37 },
    student2: { subject1:44, subject2:56, subject3:87, subject4:97, subject5:37 },
    student3: { subject1:44, subject2:56, subject3:87, subject4:97, subject5:37 }
  };
  const result = {};
  for (let key in students) {
    const scores = Object.values(students[key]);
    const avg = scores.reduce((a,b)=>a+b,0)/scores.length;
    result[key] = { average: avg };
  }
  showOutput("output11", `<pre class="success">${JSON.stringify(result,null,2)}</pre>`);
}

// Run all
function runAllProblems() {
  runProblem1();
  runProblem2();
  runProblem3();
  runProblem4();
  runProblem5();
  runProblem6();
  runProblem7();
  runProblem8();
  runProblem9();
  runProblem10();
  runProblem11();
}
