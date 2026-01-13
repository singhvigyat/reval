# 📝 ReVal

<div align="center">
  
  <h3>A modern, student-friendly web application that streamlines the <strong>exam re-evaluation process</strong> for colleges and universities.</h3>
  
  <p>This portal allows students to apply for re-evaluation of their marks and enables faculty/admin to manage and process these applications efficiently through a simple interface.</p>
  
</div>

---

## 📌 Table of Contents

<details>
<summary>Click to expand navigation</summary>

- [🚀 Features](#-features)
- [🎯 Objectives](#-objectives)
- [🛠️ Tech Stack](#-tech-stack)
- [📸 Screenshots](#-screenshots)
- [⚙️ Installation & Setup](#-installation--setup)
- [🛡️ Security](#-security)
- [📈 Future Improvements](#-future-improvements)
- [🙋‍♂️ Contributing](#-contributing)

</details>

---

## 🚀 Features

<table>
<tr>
<td width="33%">

### 👨‍🎓 Student Side
- ✅ Login/Register functionality
- ✅ Submit re-evaluation request for specific subjects
- ✅ View application status in real-time
- ✅ Receive confirmation and status updates

</td>
<td width="33%">

### 🧑‍🏫 Admin/Faculty Side
- ✅ Secure admin login
- ✅ View pending applications
- ✅ Accept or reject re-evaluation requests
- ✅ Update application status and remarks
- ✅ View filtered reports and history

</td>
<td width="34%">

### 📊 Additional Features
- ✅ Email notifications (optional)
- ✅ Responsive UI for desktop and mobile
- ✅ Searchable application table with filters
- ✅ Role-based access control

</td>
</tr>
</table>

---

## 🎯 Objectives

> ### 🎪 Transforming Education Technology

<div align="center">

| 🚫 **Eliminate** | ⚡ **Speed Up** | 🔍 **Transparency** | 👥 **User Experience** |
|:---:|:---:|:---:|:---:|
| Traditional paper-based re-evaluation system | Application processing and reduce human error | Offer transparency and traceability in the re-evaluation process | Provide a better user experience to both students and faculty |

</div>

---

<a id="-tech-stack"></a>
## 🛠️ Tech Stack

<div align="center">

### 🏗️ **Built With Modern Technologies**

</div>

<table align="center">
<thead>
<tr>
<th align="center">🔧 Technology</th>
<th align="center">📋 Description</th>
<th align="center">🔗 Links</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center"><img src="https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" /></td>
<td align="center"><strong>React</strong></td>
<td align="center"><a href="https://reactjs.org/">Docs</a></td>
</tr>
<tr>
<td align="center"><img src="https://img.shields.io/badge/Backend-Node.js%20%2F%20Express-339933?style=for-the-badge&logo=node.js&logoColor=white" /></td>
<td align="center"><strong>Node.js / Express</strong></td>
<td align="center"><a href="https://nodejs.org/">Docs</a></td>
</tr>
<tr>
<td align="center"><img src="https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" /></td>
<td align="center"><strong>MongoDB</strong></td>
<td align="center"><a href="https://www.mongodb.com/">Docs</a></td>
</tr>
<tr>
<td align="center"><img src="https://img.shields.io/badge/Authentication-JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white" /></td>
<td align="center"><strong>JWT / Session-based login</strong></td>
<td align="center"><a href="https://jwt.io/">Docs</a></td>
</tr>
</tbody>
</table>

---

## 📸 Screenshots

<div align="center">

### 🖼️ **Application Preview**

</div>

<table>
<tr>
<td width="50%">

**🎓 Student Dashboard**
![Student Dashboard](assets/student-dashboard.png)

</td>
<td width="50%">

**👨‍💼 Admin Panel**
![Admin Panel](assets/admin-panel.png)

</td>
</tr>
</table>

---

<a id="-installation--setup"></a>
## ⚙️ Installation & Setup

<div align="center">

### 🚀 **Quick Start Guide**

</div>

### Prerequisites

<table>
<tr>
<td align="center">

**📦 Node.js & npm**  
![Node.js](https://img.shields.io/badge/Node.js-16+-green?style=flat-square&logo=node.js)

</td>
<td align="center">

**🍃 MongoDB**  
![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-green?style=flat-square&logo=mongodb)

</td>
<td align="center">

**🔧 Git**  
![Git](https://img.shields.io/badge/Git-2.0+-green?style=flat-square&logo=git)

</td>
</tr>
</table>

### 📋 Steps

```bash
# 1. Clone the repo
git clone https://github.com/singhvigyat/reval.git
cd re-evaluation-portal

# 2. Install backend dependencies
cd backend
npm install

# 3. Install frontend dependencies
cd ../frontend
npm install

# 4. Set up environment variables
# Create a .env file in /server with:
all the variables given in .env.sample file

# 5. Run the server
cd ../backend
npm start

# 6. Run the frontend 
cd ../frontend
npm run dev
```

<div align="center">

🎉 **Your application should now be running!**

</div>

---

<a id="-security"></a>
## 🛡️ Security

<div align="center">

### 🔐 **Security Features**

</div>

<table>
<tr>
<td align="center" width="33%">

**🔒 Input Validation**  
All user input is validated and sanitized

</td>
<td align="center" width="33%">

**🔐 Password Hashing**  
Passwords hashed using bcrypt

</td>
<td align="center" width="34%">

**🎫 Authentication**  
Session or token-based authentication implemented

</td>
</tr>
</table>

---

## 📈 Future Improvements

<div align="center">

### 🚀 **Roadmap**

</div>

- ✅ **Comment/remark system** for admin responses
- ✅ **Analytics dashboard** for institution
- ✅ **OAuth Implementation**

<div align="center">

</div>

---

<a id="-contributing"></a>
## 🙋‍♂️ Contributing

<div align="center">

### 🤝 **We Welcome Contributions!**

</div>

Contributions are welcome! If you'd like to contribute:

<table>
<tr>
<td align="center" width="25%">

**1️⃣ Fork**  
Fork the repository

</td>
<td align="center" width="25%">

**2️⃣ Branch**  
Create a new branch  
`git checkout -b feature-name`

</td>
<td align="center" width="25%">

**3️⃣ Changes**  
Make your changes

</td>
<td align="center" width="25%">

**4️⃣ PR**  
Push and create a Pull Request

</td>
</tr>
</table>

<div align="center">

</div>

---

## 🙌 Acknowledgements

<div align="center">

**💡 Inspiration & Feedback**

</div>

- 🎨 UI inspiration from various open-source educational tools
- 👥 Feedback from real students and teachers helped shape the UX

---

### 📞 **Connect With Us**

[![GitHub](https://img.shields.io/badge/GitHub-singhvigyat-black?style=for-the-badge&logo=github)](https://github.com/singhvigyat)

**Made with ❤️ for the Education Community**

[![Star this repo](https://img.shields.io/badge/⭐-Star%20this%20repo-yellow?style=for-the-badge)](https://github.com/singhvigyat/re-evaluation-portal/stargazers)

</div>
