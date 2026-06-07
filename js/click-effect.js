/**
 * 鼠标点击特效：彩色涟漪 + 随机文字
 * 点击时在鼠标位置生成彩色波纹和随机飘散文字
 */
(function() {
    'use strict';

    // 飘散文字池
    var texts = ['✦', '❋', '✧', '♡', '❀', '✿', '⚡', '★', '♪', '🔮', '💜', '✨'];

    // 颜色池
    var colors = [
        '#a18cd1', '#c3b4e5', '#7c6bb5', '#ff9a9e', '#fad0c4',
        '#a1c4fd', '#c2e9fb', '#d4a5a5', '#89c2d9', '#b8a9c9'
    ];

    function createRipple(x, y) {
        var ripple = document.createElement('div');
        ripple.className = 'click-ripple';
        ripple.style.cssText = [
            'left:' + (x - 12) + 'px',
            'top:' + (y - 12) + 'px',
            'width:24px',
            'height:24px',
            'position:fixed',
            'border-radius:50%',
            'pointer-events:none',
            'z-index:99999',
            'border:2px solid ' + colors[Math.floor(Math.random() * colors.length)],
            'animation:clickRipple 0.8s ease-out forwards'
        ].join(';');
        document.body.appendChild(ripple);

        ripple.addEventListener('animationend', function() {
            ripple.remove();
        });
    }

    function createParticles(x, y) {
        var count = 6;
        for (var i = 0; i < count; i++) {
            var particle = document.createElement('span');
            var angle = (i / count) * Math.PI * 2;
            var distance = 30 + Math.random() * 40;
            var dx = Math.cos(angle) * distance;
            var dy = Math.sin(angle) * distance;

            particle.textContent = texts[Math.floor(Math.random() * texts.length)];
            particle.style.cssText = [
                'position:fixed',
                'left:' + x + 'px',
                'top:' + y + 'px',
                'font-size:' + (10 + Math.random() * 14) + 'px',
                'color:' + colors[Math.floor(Math.random() * colors.length)],
                'pointer-events:none',
                'z-index:99999',
                'font-weight:bold',
                'user-select:none',
                'animation:clickParticle 1.2s ease-out forwards',
                '--dx:' + dx + 'px',
                '--dy:' + dy + 'px'
            ].join(';');
            document.body.appendChild(particle);

            particle.addEventListener('animationend', function() {
                particle.remove();
            });
        }
    }

    // 注入动画关键帧
    var style = document.createElement('style');
    style.textContent = [
        '@keyframes clickRipple {',
        '  0% { transform:scale(0); opacity:1; }',
        '  100% { transform:scale(3); opacity:0; }',
        '}',
        '@keyframes clickParticle {',
        '  0% { transform:translate(0,0) scale(1); opacity:1; }',
        '  60% { opacity:1; }',
        '  100% { transform:translate(var(--dx),var(--dy)) scale(0.3); opacity:0; }',
        '}'
    ].join('');
    document.head.appendChild(style);

    document.addEventListener('click', function(e) {
        // 忽略链接点击时不显示特效（避免干扰）
        if (e.target.closest('a') || e.target.closest('button') || e.target.closest('input')) return;
        createRipple(e.clientX, e.clientY);
        createParticles(e.clientX, e.clientY);
    });

})();