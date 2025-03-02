document.addEventListener("DOMContentLoaded", function () {
  // Cursor Effect
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", function (e) {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
  });

  // Image Hover Effect
  const projectLinks = document.querySelectorAll(".project-link");
  const imageContainer = document.querySelector(".image-container");

  // Define images for each project
  const projectImages = {
      "book-design": [
          { src: "images/cover.jpg", top: "12%", left: "60%", width: "35%", height: "auto" },
          { src: "images/middlepages.jpg", top: "50%", left: "45%", width: "23%", height: "auto" },
          { src: "images/poempage.jpeg", top: "20%", left: "10%", width: "25%", height: "auto" }
      ],
      "manifesto-poster": [
          { src: "images/poster1.jpg", top: "15%", left: "65%", width: "30%", height: "auto" },
          { src: "images/poster2.jpg", top: "50%", left: "50%", width: "20%", height: "auto" }
      ],
      "infographic": [
        {src:"images/dosmockup.jpg", top:"10%", left:"45%", width:"30%", height: "auto"},
          { src: "images/dos2.jpg", top: "35%", left: "70%", width: "23%", height: "auto" }
          
         
      ],
      "zine" :[
        {src:"images/zinecover.jpg", top:"10%", left:"60%", width:"20%", height:"auto"},
        {src:"images/zinespread.jpg", top: "50%", left:"32%", width:"25%", height:"auto"},
        {src:"images/backcover.jpg", top: "50%", left: "75%", width:"18%", height:"auto"}
      ]
  };

  projectLinks.forEach(link => {
      link.addEventListener("mouseenter", function () {
          const projectKey = link.dataset.project;
          imageContainer.innerHTML = ""; // Clear previous images

          projectImages[projectKey].forEach(imgData => {
              const img = document.createElement("img");
              img.src = imgData.src;
              img.style.position = "absolute"; // ✅ Needed for top & left to work
              img.style.top = imgData.top;
              img.style.left = imgData.left;
              img.style.width = imgData.width;
              img.style.height = imgData.height;
              imageContainer.appendChild(img);
          });

          imageContainer.style.opacity = "1"; // Show images
      });

      link.addEventListener("mouseleave", function () {
          imageContainer.style.opacity = "0"; // Hide images
      });
  });
});
