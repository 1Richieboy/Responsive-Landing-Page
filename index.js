// menu bar 
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const navigation = document.querySelector(".navigation");

  menuIcon.addEventListener("click", () => {
    navigation.classList.add("show");
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  });

  closeIcon.addEventListener("click", () => {
    navigation.classList.remove("show");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  });
