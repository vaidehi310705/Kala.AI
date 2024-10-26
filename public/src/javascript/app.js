const submitForm = () => {
  const chatInput = $(".chat-input").val();

  $("main").append(`
  <div class="chat-msg-box client">
    <p>${chatInput}</p>
  </div>
  `);

  $.ajax({
    url: `https://api.metaai.com/v1/question`,  // Replace with Meta AI endpoint
    method: "POST",  // Assuming Meta AI requires POST
    headers: {
      "Authorization": "Bearer YOUR_META_API_KEY",  // Use your actual API key
      "Content-Type": "application/json"
    },
    data: JSON.stringify({ query: chatInput }),  // JSON request body for Meta AI
    cache: false,
    beforeSend: () => {
      $(".chat-input").val("");
      $(".typing").show();
      $("main").append(`
        <div class="chat-msg-box bot">
          <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
          </div>
        </div>
        `);
      if ($(".chat-msg-box").length >= 10) {
        $([document.documentElement, document.body]).animate({
          scrollTop: $(".chat-msg-box.bot:last-child").offset().top,
        }, { duration: 500 });
      }
    },
    success: (data) => {
      const response = (data.message || data.answer || data.response).replace(/\n/gm, "</br>");  // Adjust for Meta AI response format
      $(".chat-msg-box.bot:last-child").html(`<p>${response}</p>`);
    },
    error: () => {
      $(".chat-msg-box.bot:last-child").html(`<p>Sorry, there was an error processing your request.</p>`);
    },
    complete: () => {
      $(".typing").hide();
    },
  });
};

window.onload = () => {
  setTimeout(() => {
    if (document.querySelectorAll(".chat-msg-box").length === 0) {
      $.ajax({
        url: "https://api.metaai.com/v1/welcome",  // Replace with Meta AI welcome endpoint
        headers: {
          "Authorization": "Bearer YOUR_META_API_KEY",
        },
        beforeSend: () => {
          $(".typing").show();
          $("main").append(`
            <div class="chat-msg-box bot">
              <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
              </div>
            </div>
            `);
        },
        success: (data) => {
          const response = (data.message || data.answer).replace(/\n/gm, "</br>");
          $(".chat-msg-box.bot:last-child").html(`<p>${response}</p>`);
        },
        error: () => {
          $(".chat-msg-box.bot:last-child").html(`<p>Sorry, there was an error loading the welcome message.</p>`);
        },
        complete: () => {
          $(".typing").hide();
        },
      });
    }
  }, 3000);
};
