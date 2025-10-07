body {
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: hidden;
    background: radial-gradient(circle at top, #1a001a 0%, #000 100%);
    font-family: 'Creepster', cursive;
    color: #ff0000;
    text-align: center;
}
.title {
    margin-top: 100px;
    font-size: 2em;
    text-shadow: 3px 3px 8px black;
}
#username {
    margin-top: 20px;
    padding: 10px;
    border-radius: 8px;
    border: none;
    width: 60%;
    text-align: center;
}
button {
    margin-top: 15px;
    padding: 12px 30px;
    border: none;
    background: #a64cff;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1.2em;
}
.sky {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: -1;
}
.moon {
    position: absolute;
    top: 10%;
    right: 10%;
    width: 120px;
    height: 120px;
    background: radial-gradient(circle, #fff, #ccc);
    border-radius: 50%;
    box-shadow: 0 0 40px #fff8;
}
.cloud {
    position: absolute;
    background: rgba(255,255,255,0.3);
    border-radius: 50%;
    animation: moveClouds 60s linear infinite;
}
.cloud1 { top: 20%; left: -200px; width: 200px; height: 60px; animation-delay: 0s; }
.cloud2 { top: 50%; left: -300px; width: 300px; height: 80px; animation-delay: 15s; }
@keyframes moveClouds {
    0% { transform: translateX(0); }
    100% { transform: translateX(120vw); }
}
#question-text {
    color: #ff0000;
    text-shadow: 2px 2px 3px black;
    font-size: 1.5em;
    margin: 20px;
}
.option-btn {
    display: block;
    margin: 10px auto;
    padding: 12px 20px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-size: 1.1em;
    width: 70%;
}
.vampire { background: #8B0000; }
.witch { background: #4B0082; }
.zombie { background: #228B22; }
#lives img {
    width: 40px;
    margin: 5px;
}
