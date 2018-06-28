# Stellaris Ironman Auto Copy

## 用法 [English](#usage)

1. 安装 [NodeJS](https://nodejs.org/), 如已安装请跳过  

    下载链接: [Windows 系统](https://nodejs.org/en/), [Mac 系统](https://nodejs.org/en/)
    根据提示安装

2. 安装本工具

    在任意位置打开命令行 运行
    
    ```
    npm i -g stellaris-ironman-auto-copy
    ```

3. 进入存档目录
    
    ```
    cd ~/Documents/Paradox\ Interactive/Stellaris/save\ games/帝国名字_-847382924/
    ```              
    
    帝国名字 是你当前铁人游戏使用的帝国的名字
    后面的乱码数字是该局游戏的随机数
    
    PS: 没法再命令行中打出中文的话可以这样:
    
    先输入 `cd ~/Documents/Paradox\ Interactive/Stellaris/save\ games/`, 然后不停地按 `Tab`, 直到高亮切换到你想要的目录再按 `Enter`, 视觉效果参考下图
    
    ![image](https://user-images.githubusercontent.com/5801015/42039728-f103a66c-7aa2-11e8-9d2e-e2147a42409d.png)

4. 运行本工具

```
stellaris-ironman-auto-copy
```
你会看下如下输出

```
Start watching ironman.sav changes
Copy ironman.sav to ironman-2018-06-28-06-55-49.sav
Copy ironman.sav to ironman-2018-06-28-06-56-09.sav
Copy ironman.sav to ironman-2018-06-28-06-56-46.sav
```

## Usage

1. Install [NodeJS](https://nodejs.org/)  
   Download links: [Windows](https://nodejs.org/en/), [Mac OS](https://nodejs.org/en/)
   
2. Install this tool
   Open your command line from anywhere and run:
   
    ```
    npm i -g stellaris-ironman-auto-copy
    ```   
   
3. Enter to directory of saves

    ```
    cd ~/Documents/Paradox\ Interactive/Stellaris/save\ games/EmpireName_-847382924/
    ```      

    EmpireName is the name of the empire you are using in current ironman game
    The garbled number after is the random seed of current game

    PS: If you cannot input your empire name in the command line:
    
    Input `cd ~/Documents/Paradox\ Interactive/Stellaris/save\ games/` first and the keep press `Tab` until the highlight switched to the directory you want and finally press `Enter`;
    
    You will see something similar to this: 
    
    ![image](https://user-images.githubusercontent.com/5801015/42039728-f103a66c-7aa2-11e8-9d2e-e2147a42409d.png)

4. Run this tool

```
stellaris-ironman-auto-copy
```
You will see outputs like below:

```
Start watching ironman.sav changes
Copy ironman.sav to ironman-2018-06-28-06-55-49.sav
Copy ironman.sav to ironman-2018-06-28-06-56-09.sav
Copy ironman.sav to ironman-2018-06-28-06-56-46.sav
```

## MIT License
