
# Javascript 笔记
### 倒计时
```
var count = 10;
var timer = null;
timer = setInterval(function() {
    console.log(count--)
    if (count == 0) {
        clearInterval(timer);
    }
}, 1000);
```
