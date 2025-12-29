// Loading Screen
window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loadingScreen");

  // Simulasikan loading dengan timeout
  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    loadingScreen.style.visibility = "hidden";

    // Tampilkan animasi masuk untuk konten
    document.querySelectorAll(".animate__animated").forEach((element) => {
      element.style.animationPlayState = "running";
    });
  }, 1500);
});

// Navigasi
document.addEventListener("DOMContentLoaded", function () {
  // Elemen DOM
  const navMenu = document.getElementById("navMenu");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");
  const backToTop = document.getElementById("backToTop");
  const startBtn = document.getElementById("startBtn");
  const quizBtn = document.getElementById("quizBtn");

  // Toggle menu hamburger
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Tutup menu saat link diklik
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");

      // Update link aktif
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      // Tampilkan section yang sesuai
      const targetId = this.getAttribute("href").substring(1);
      sections.forEach((section) => {
        section.classList.remove("active");
        if (section.id === targetId) {
          section.classList.add("active");
          // Tambahkan animasi
          section.classList.add("animate__fadeIn");

          // Scroll ke section dengan offset untuk navbar
          setTimeout(() => {
            const element = document.getElementById(targetId);
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }, 100);
        }
      });
    });
  });

  // Tombol Mulai Belajar
  startBtn.addEventListener("click", function () {
    document.querySelector('a[href="#penjumlahan"]').click();
  });

  // Tombol Coba Kuis
  quizBtn.addEventListener("click", function () {
    document.querySelector('a[href="#latihan"]').click();
  });

  // Back to Top Button
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Tampilkan solusi contoh soal
  const solutionButtons = document.querySelectorAll(".show-solution");
  solutionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const exampleNum = this.getAttribute("data-example");
      const solution = document.getElementById(`solution${exampleNum}`);

      if (solution.style.display === "block") {
        solution.style.display = "none";
        this.textContent = "Tampilkan Solusi";
      } else {
        solution.style.display = "block";
        this.textContent = "Sembunyikan Solusi";
      }
    });
  });

  // Kalkulator
  const calcTabs = document.querySelectorAll(".calc-tab");
  const calcPanels = document.querySelectorAll(".calc-panel");

  calcTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const target =
        this.id === "tabAddition" ? "calcAddition" : "calcMultiplication";

      // Update tab aktif
      calcTabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      // Tampilkan panel yang sesuai
      calcPanels.forEach((panel) => {
        panel.classList.remove("active");
        if (panel.id === target) {
          panel.classList.add("active");
        }
      });
    });
  });

  // Kalkulator Penjumlahan
  const calculateAddition = document.getElementById("calculateAddition");
  const additionResult = document.getElementById("additionResult");
  const additionCalculation = document.getElementById("additionCalculation");
  const additionTotal = document.getElementById("additionTotal");
  const additionMethod = document.getElementById("additionMethod");
  const additionError = document.getElementById("additionError");

  calculateAddition.addEventListener("click", function () {
    const input1 = parseInt(document.getElementById("addInput1").value) || 0;
    const input2 = parseInt(document.getElementById("addInput2").value) || 0;
    const input3 = parseInt(document.getElementById("addInput3").value) || 0;

    if (input1 <= 0 || input2 <= 0) {
      additionError.style.display = "block";
      additionMethod.style.display = "none";
      additionResult.style.display = "block";
      return;
    }

    const total = input1 + input2 + input3;

    let calculationText = `${input1} + ${input2}`;
    if (input3 > 0) {
      calculationText += ` + ${input3}`;
    }
    calculationText += ` = ${total}`;

    additionCalculation.textContent = calculationText;
    additionTotal.textContent = total;

    additionMethod.style.display = "block";
    additionError.style.display = "none";
    additionResult.style.display = "block";

    // Tambahkan animasi
    additionResult.classList.add("animate__fadeIn");
  });

  // Kalkulator Perkalian
  const calculateMultiplication = document.getElementById(
    "calculateMultiplication"
  );
  const multiplicationResult = document.getElementById("multiplicationResult");
  const multiplicationCalculation = document.getElementById(
    "multiplicationCalculation"
  );
  const multiplicationTotal = document.getElementById("multiplicationTotal");
  const multiplicationMethod = document.getElementById("multiplicationMethod");
  const multiplicationError = document.getElementById("multiplicationError");

  calculateMultiplication.addEventListener("click", function () {
    const input1 = parseInt(document.getElementById("mulInput1").value) || 0;
    const input2 = parseInt(document.getElementById("mulInput2").value) || 0;
    const input3 = parseInt(document.getElementById("mulInput3").value) || 1;

    if (input1 <= 0 || input2 <= 0 || input3 <= 0) {
      multiplicationError.style.display = "block";
      multiplicationMethod.style.display = "none";
      multiplicationResult.style.display = "block";
      return;
    }

    const total = input1 * input2 * input3;

    let calculationText = `${input1} × ${input2}`;
    if (input3 > 1) {
      calculationText += ` × ${input3}`;
    }
    calculationText += ` = ${total}`;

    multiplicationCalculation.textContent = calculationText;
    multiplicationTotal.textContent = total;

    multiplicationMethod.style.display = "block";
    multiplicationError.style.display = "none";
    multiplicationResult.style.display = "block";

    // Tambahkan animasi
    multiplicationResult.classList.add("animate__fadeIn");
  });

  // Video Player
  const videoItems = document.querySelectorAll(".video-item");
  const videoPlaceholder = document.getElementById("videoPlaceholder");
  const videoWrapper = document.getElementById("videoWrapper");
  const videoFrame = document.getElementById("videoFrame");

  videoItems.forEach((item) => {
    item.addEventListener("click", function () {
      const videoUrl = this.getAttribute("data-video");

      // Update item aktif
      videoItems.forEach((v) => v.classList.remove("active"));
      this.classList.add("active");

      // Tampilkan video
      videoPlaceholder.style.display = "none";
      videoWrapper.style.display = "block";
      videoFrame.src = videoUrl;
    });
  });

  // Latihan Soal
  const quizData = [
    {
      question:
        "Seorang siswa dapat memilih untuk mengikuti klub basket atau klub sepak bola. Jika ada 3 klub basket dan 2 klub sepak bola, berapa banyak pilihan yang tersedia?",
      options: ["3", "5", "6", "2"],
      correctAnswer: 1,
      explanation:
        "Menggunakan aturan penjumlahan karena hanya memilih satu klub (basket ATAU sepak bola): 3 + 2 = 5",
    },
    {
      question:
        "Di sebuah toko terdapat 4 jenis roti dan 5 jenis kue. Jika seorang pembeli hanya boleh membeli satu item (roti ATAU kue), berapa banyak pilihan yang tersedia?",
      options: ["9", "20", "4", "5"],
      correctAnswer: 0,
      explanation:
        "Menggunakan aturan penjumlahan karena hanya membeli satu item: 4 + 5 = 9",
    },
    {
      question:
        "Dalam sebuah kantong terdapat 7 kelereng merah dan 8 kelereng biru. Berapa banyak cara untuk mengambil satu kelereng?",
      options: ["56", "15", "7", "8"],
      correctAnswer: 1,
      explanation:
        "Menggunakan aturan penjumlahan karena hanya mengambil satu kelereng (merah ATAU biru): 7 + 8 = 15",
    },
    {
      question:
        "Seorang pelanggan ingin membeli satu setel pakaian yang terdiri dari baju dan celana. Jika ada 5 model baju dan 3 model celana, berapa banyak kombinasi yang dapat dipilih?",
      options: ["8", "15", "5", "3"],
      correctAnswer: 1,
      explanation:
        "Menggunakan aturan perkalian karena memilih baju DAN celana: 5 × 3 = 15",
    },
    {
      question:
        "Berapa banyak password 2 karakter yang dapat dibuat dengan 1 huruf diikuti 1 angka? (Huruf: A-Z, Angka: 0-9)",
      options: ["36", "260", "26", "2600"],
      correctAnswer: 0,
      explanation:
        "Menggunakan aturan perkalian karena memilih huruf DAN angka: 26 × 10 = 260",
    },
  ];

  let currentQuestion = 0;
  let userAnswers = new Array(quizData.length).fill(null);
  let quizCompleted = false;

  const questionText = document.getElementById("questionText");
  const quizOptions = document.getElementById("quizOptions");
  const currentQuestionSpan = document.getElementById("currentQuestion");
  const progressFill = document.getElementById("progressFill");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const submitQuiz = document.getElementById("submitQuiz");
  const quizFeedback = document.getElementById("quizFeedback");
  const feedbackCorrect = document.getElementById("feedbackCorrect");
  const feedbackIncorrect = document.getElementById("feedbackIncorrect");
  const correctExplanation = document.getElementById("correctExplanation");
  const incorrectExplanation = document.getElementById("incorrectExplanation");
  const quizResult = document.getElementById("quizResult");
  const scoreValue = document.getElementById("scoreValue");
  const correctCount = document.getElementById("correctCount");
  const restartQuiz = document.getElementById("restartQuiz");

  function loadQuestion() {
    const question = quizData[currentQuestion];
    questionText.textContent = question.question;

    quizOptions.innerHTML = "";
    question.options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.className = "quiz-option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "quizOption";
      input.id = `option${index}`;
      input.value = index;

      if (userAnswers[currentQuestion] === index) {
        input.checked = true;
      }

      input.addEventListener("change", function () {
        userAnswers[currentQuestion] = parseInt(this.value);
        checkAnswer();
      });

      const label = document.createElement("label");
      label.htmlFor = `option${index}`;
      label.textContent = option;

      optionElement.appendChild(input);
      optionElement.appendChild(label);
      quizOptions.appendChild(optionElement);
    });

    currentQuestionSpan.textContent = currentQuestion + 1;
    progressFill.style.width = `${
      ((currentQuestion + 1) / quizData.length) * 100
    }%`;

    // Update tombol navigasi
    prevBtn.disabled = currentQuestion === 0;

    if (currentQuestion === quizData.length - 1) {
      nextBtn.style.display = "none";
      submitQuiz.style.display = "inline-flex";
    } else {
      nextBtn.style.display = "inline-flex";
      submitQuiz.style.display = "none";
    }

    // Sembunyikan feedback
    quizFeedback.style.display = "none";
    feedbackCorrect.style.display = "none";
    feedbackIncorrect.style.display = "none";
  }

  function checkAnswer() {
    if (userAnswers[currentQuestion] === null) return;

    const isCorrect =
      userAnswers[currentQuestion] === quizData[currentQuestion].correctAnswer;

    if (isCorrect) {
      feedbackCorrect.style.display = "flex";
      feedbackIncorrect.style.display = "none";
      correctExplanation.textContent = quizData[currentQuestion].explanation;
    } else {
      feedbackCorrect.style.display = "none";
      feedbackIncorrect.style.display = "flex";
      incorrectExplanation.textContent = quizData[currentQuestion].explanation;
    }

    quizFeedback.style.display = "block";
  }

  prevBtn.addEventListener("click", function () {
    if (currentQuestion > 0) {
      currentQuestion--;
      loadQuestion();
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentQuestion < quizData.length - 1) {
      currentQuestion++;
      loadQuestion();
    }
  });

  submitQuiz.addEventListener("click", function () {
    // Periksa jika semua soal telah dijawab
    const unanswered = userAnswers.some((answer) => answer === null);
    if (unanswered) {
      alert("Harap jawab semua soal sebelum mengirim!");
      return;
    }

    // Hitung skor
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === quizData[index].correctAnswer) {
        score++;
      }
    });

    // Tampilkan hasil
    document.querySelector(".quiz-content").style.display = "none";
    quizResult.style.display = "block";

    const percentage = Math.round((score / quizData.length) * 100);
    scoreValue.textContent = percentage;
    correctCount.textContent = score;

    // Animasi lingkaran skor
    const scoreCircle = document.querySelector(".score-circle");
    scoreCircle.style.background = `conic-gradient(#4cc9f0 ${percentage}%, #e9ecef ${percentage}% 100%)`;

    quizCompleted = true;
  });

  restartQuiz.addEventListener("click", function () {
    currentQuestion = 0;
    userAnswers = new Array(quizData.length).fill(null);
    quizCompleted = false;

    document.querySelector(".quiz-content").style.display = "block";
    quizResult.style.display = "none";

    loadQuestion();
  });

  // Inisialisasi kuis
  loadQuestion();

  // Animasi scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__fadeInUp");
      }
    });
  }, observerOptions);

  // Observasi elemen untuk animasi saat scroll
  document
    .querySelectorAll(
      ".theory-card, .examples-card, .feature-card, .example-item"
    )
    .forEach((el) => {
      observer.observe(el);
    });

  // Animasi untuk kartu visual di home
  const visualCards = document.querySelectorAll(".visual-card");
  visualCards.forEach((card, index) => {
    card.style.animation = `fadeIn 0.8s ease ${index * 0.2}s both`;
  });
});

// Tambahkan beberapa animasi CSS tambahan
const style = document.createElement("style");
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }
    
    .visual-card {
        animation: float 4s ease-in-out infinite;
    }
    
    .add-card {
        animation-delay: 0s;
    }
    
    .multiply-card {
        animation-delay: 2s;
    }
    
    .pulse {
        animation: pulse 2s infinite;
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .home-left {
        animation: slideInLeft 1s ease both;
    }
    
    .home-right {
        animation: slideInRight 1s ease both;
    }
`;
document.head.appendChild(style);
