:root{
  --bg:#0b0b0f;
  --card:#111217;
  --accent:#a64cff;
  --muted:#bdbdbd;
  --accent-2:#ff9f1c;
}
*{box-sizing:border-box;font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial;}
html,body,#app{height:100%;margin:0;background:linear-gradient(180deg,#06060a 0%,#0a0a0f 100%);color:#fff;overflow-x:hidden;}

/* Pantallas */
.screen{display:flex;align-items:center;justify-content:center;padding:28px;position:relative;}
.hidden{display:none;}

/* Inicio */
.start-content{display:flex;flex-direction:column;align-items:center;gap:16px;z-index:2;}
.main-title{font-family:'Fredericka the Great', cursive;font-size:clamp(24px,8vw,36px);text-align:center;color:var(--accent);text-shadow: 0 0 10px var(--accent);}
.start-card{background:linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.05));border:1px solid rgba(255,255,255,0.04);padding:22px;border-radius:12px;width:90%;max-width:350px;text-align:center;}
.start-card input{width:100%;padding:12px;margin:12px 0;border-radius:8px;border:1px solid rgba(255,255,255,0.06);background:#0b0b0f;color:#fff;}
.btn{padding:12px 16px;border-radius:12px;border:none;cursor:pointer;font-weight:600;background:transparent;color:#fff;border:1px solid rgba(255,255,255,0.06);font-size:16px;}
.btn.primary{background:linear-gradient(90deg,var(--accent),var(--accent-2));border:none;color:#0b0b0f;}
.small-hint{font-size:12px;color:var(--muted);margin-top:8px;}

/* Header de juego */
.game-header{width:100%;max-width:500px;display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;padding:0 8px;z-index:2;}
#greeting{font-size:18px;color:var(--accent);font-weight:700}
#lives{font-size:16px;color:var(--muted)}

/* Juego */
.game-main{width:100%;max-width:500px;display:flex;flex-direction:column;align-items:center;z-index:2;}
#question-card{background:linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.06));padding:22px;border-radius:12px;width:100%;}
#question-text{min-height:56px;font-size:18px;margin:0 0 16px 0;color:#fff;text-align:center;}
.answers-grid{display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:8px;}
.answer-btn{flex:1 1 45%;min-width:120px;padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.04);background:linear-gradient(180deg,rgba(255,255,255,0.01),rgba(0,0,0,0.04));cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;font-size:14px;}
.answer-icon{font-size:28px;transform:translateY(-2px)}
.answer-label{font-size:14px;color:var(--muted)}
.btn-momia{background:linear-gradient(#eee,#ddd);color:#222;border:2px solid #f3f3f3;}
.btn-bruja{background:linear-gradient(90deg,#4b0a68,#8a2be2);color:white;}
.btn-vamp{background:linear-gradient(90deg,#2a0a12,#5b0011);color:#ffdede;}

/* Final */
.end-card{background:var(--card);padding:28px;border-radius:12px;text-align:center;z-index:2;}
#end-title{font-size:22px;color:var(--accent);margin:0 0 8px 0;text-align:center;}
#end-sub{font-size:16px;margin:0 0 6px 0;text-align:center;}
.small-note{font-size:13px;color:var(--muted);margin-top:6px;text-align:center;}

/* Luna y nubes */
.moon{position:absolute;top:20px;right:20px;width:120px;height:120px;background:radial-gradient(circle, #fff 0%, #ccc 70%, #999 100%);border-radius:50%;box-shadow:0 0 20px rgba(255,255,255,0.5);z-index:1;}
.cloud{position:absolute;top:40%;width:150px;height:60px;background:rgba(255,255,255,0.05);border-radius:50%;filter:blur(3px);opacity:0.8;animation:cloudMove linear infinite;}
.cloud1{animation-duration:45s;left:-200px;}
.cloud2{animation-duration:60s;left:-300px;top:50%;}
.cloud3{animation-duration:75s;left:-250px;top:60%;}

@keyframes cloudMove{
  0%{transform:translateX(0);}
  100%{transform:translateX(110vw);}
}
