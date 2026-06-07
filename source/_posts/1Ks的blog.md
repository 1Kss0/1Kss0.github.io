---
title: 1Ks的blog
date: 2026-04-21 12:40:12
tags: 1Ks,网安,CTF,电子数据取证
---

<!-- 1. 动态背景样式：流动极光渐变 -->
<style>
    /* 定义背景动画 */
    @keyframes gradientBG {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }

    body {
        /* 深蓝紫渐变，非常丝滑 */
        background: linear-gradient(-45deg, #0f0c29, #302b63, #24243e, #000000);
        background-size: 400% 400%;
        animation: gradientBG 15s ease infinite;
        background-attachment: fixed;
    }

    /* 欢迎卡片：现代磨砂玻璃风格 */
    .welcome-card {
        background: rgba(255, 255, 255, 0.05); /* 极低透明度白色 */
        backdrop-filter: blur(12px); /* 强力毛玻璃模糊 */
        -webkit-backdrop-filter: blur(12px);
        border-radius: 16px;
        border: 1px solid rgba(255, 255, 255, 0.1); /* 极细的白色边框 */
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37); /* 柔和阴影 */
        padding: 40px;
        text-align: center;
        color: #ffffff;
        margin-bottom: 30px;
        transform: translateY(0);
        transition: transform 0.3s;
    }

    /* 鼠标悬停卡片时的微动效 */
    .welcome-card:hover {
        transform: translateY(-5px);
        border-color: rgba(255, 255, 255, 0.3);
    }

    /* 标题样式：加粗、加大、纯白 */
    .welcome-card h1 {
        margin-top: 0;
        font-size: 2.8em; /* 放大字号 */
        font-weight: 900; /* 极致加粗 */
        color: #ffffff; /* 纯白色 */
        letter-spacing: 2px;
        text-shadow: 0 2px 4px rgba(0,0,0,0.5); /* 增加一点阴影更有立体感 */
    }

    .welcome-card p {
        font-size: 1.1em;
        line-height: 1.8;
        color: #e0e0e0;
    }

    .highlight {
        color: #a18cd1; /* 淡紫色高亮 */
        font-weight: bold;
        font-family: 'Courier New', Courier, monospace;
    }
</style>

<!-- 2. 欢迎卡片内容 -->
<div class="welcome-card">
    <h1>👋 Hello, World!</h1>
    <p>
        我是 <span class="highlight">1Ks</span>，一名正在成长的 <span class="highlight">网络安全小白</span>。<br>
        这里是我的数字花园，主要记录我的 <span class="highlight">CTF</span> 竞赛解题思路、<span class="highlight">Web渗透</span> 学习笔记。<br>
        同时，我也正在深入学习 <span class="highlight">电子数据取证</span> 相关知识。<br>
        路漫漫其修远兮，吾将上下而求索。🚀
    </p>
</div>

<!-- 3. 点击特效脚本：彩色爱心/气球效果 -->
<script>
    !function() {
        function n(n, e, t) {
            return n.getAttribute(e) || t
        }
        function e(n) {
            return document.getElementsByTagName(n)
        }
        function t() {
            var t = e("script"),
                o = t.length,
                i = t[o - 1];
            return {
                l: o,
                z: n(i, "zIndex", -1),
                o: n(i, "opacity", .5),
                c: n(i, "color", "0,0,0"),
                n: n(i, "count", 99)
            }
        }
        function o() {
            a = m.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            c = m.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }
        function i() {
            r.clearRect(0, 0, a, c);
            var n, e, t, o, m, l;
            s.forEach(function(i, x) {
                for (i.x += i.xa, i.y += i.ya, i.xa *= i.x > a || i.x < 0 ? -1 : 1, i.ya *= i.y > c || i.y < 0 ? -1 : 1, r.fillRect(i.x - .5, i.y - .5, 1, 1), e = x + 1; e < u.length; e++) n = u[e], null !== n.x && null !== n.y && (o = i.x - n.x, m = i.y - n.y, l = o * o + m * m, l < n.max && (n === y && l >= n.max / 2 && (i.x -= .03 * o, i.y -= .03 * m), t = (n.max - l) / n.max, r.beginPath(), r.lineWidth = t / 2, r.strokeStyle = "rgba(" + d.c + "," + (t + .2) + ")", r.moveTo(i.x, i.y), r.lineTo(n.x, n.y), r.stroke()))
            }),
            x(i)
        }
        var a, c, u, m = document.createElement("canvas"),
            d = t(),
            l = "c_n" + d.l,
            r = m.getContext("2d"),
            x = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(n) {
                window.setTimeout(n, 1e3 / 45)
            },
            w = Math.random,
            y = {
                x: null,
                y: null,
                max: 2e4
            };
        m.id = l,
        m.style.cssText = "position:fixed;top:0;left:0;z-index:" + d.z + ";opacity:" + d.o,
        e("body")[0].appendChild(m),
        o(),
        window.onresize = o,
        window.onmousemove = function(n) {
            n = n || window.event,
            y.x = n.clientX,
            y.y = n.clientY
        },
        window.onmouseout = function() {
            y.x = null,
            y.y = null
        };
        for (var s = [], f = 0; d.n > f; f++) {
            var h = w() * a,
                g = w() * c,
                v = 2 * w() - 1,
                p = 2 * w() - 1;
            s.push({
                x: h,
                y: g,
                xa: v,
                ya: p,
                max: 6e3
            })
        }
        u = s.concat([y]),
        setTimeout(function() {
            i()
        }, 100)
    }();
</script>