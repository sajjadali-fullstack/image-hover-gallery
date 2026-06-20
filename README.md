# 🖼️ Image Hover Gallery

An interactive gallery where images appear and follow your cursor as you hover over character names. Built with pure HTML, CSS, and JavaScript — no libraries needed.

🔗 **Live Demo:** [sajjadali-fullstack.github.io/image-hover-gallery](https://sajjadali-fullstack.github.io/image-hover-gallery/)

---

## ✨ Features

- Images appear on hover and follow your mouse cursor in real time
- Smooth opacity transition for a polished feel
- `mix-blend-mode: difference` for a stylish text effect
- WWE stars + Bollywood characters included
- Easy to extend — just add a name and image

---

## 🛠️ Built With

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---


## 🎨 Demo

![Hover Image Gallery Demo](images/demo.png)  
*(Replace this with an actual screenshot or GIF of your project)*

---

## 📂 Folder Structure

hover-image-gallery/
│
├── images/ # All images (WWE stars, movie characters)
├── style.css # External CSS file
├── script.js # JavaScript for hover/cursor effect
└── index.html # Main HTML file


---

## 💡 How It Works

Each `.element` div listens for three mouse events:

| Event | Action |
|---|---|
| `mouseenter` | Image fades in (opacity → 1) |
| `mouseleave` | Image fades out (opacity → 0) |
| `mousemove` | Image position updates to cursor `x, y` |

```js
element.addEventListener("mousemove", (event) => {
    element.childNodes[3].style.left = event.x + "px";
    element.childNodes[3].style.top  = event.y + "px";
});
```

---

## 🎨 Preview

![Demo](images/demo.png)

---

## 🚀 Run Locally

```bash
git clone https://github.com/sajjadali-fullstack/image-hover-gallery.git
cd image-hover-gallery
# Open index.html in your browser
```

---

## 👤 Author

**Sajjad Ali** — [GitHub](https://github.com/sajjadali-fullstack) · [Portfolio](https://sajjadali-fullstack-portfolio.netlify.app/)
