# 简介 Info

这是我的物联网信息安全课课设，
一个简单的由Shell和NodeJS构建的勒索木马病毒

This is my course design of IOT Information Security,
a simple rojan horse virus demo made with Shell and NodeJS

shell脚本会加密当前所在目录及其子目录下的C/C++,Java,Python，
而具体的加密方式是通过将文件内容发送给远程服务器上的NodeJS进行，
加密完成后再由NodeJS响应给shell脚本

The shell script will encrypt the C/C++, Java, Python in the current directory and its subdirectories.
The specific encryption method is to send the file content to NodeJS on the remote server. 
After encryption, NodeJS will respond to the shell script

# 注意 Mind

本项目仅供学习使用，请自觉遵守法律法规。
测试使用时注意新建一个文件夹，将要shell脚本和用于测试的文件放入其中进行。

This project is only for learning, please consciously abide by laws and regulations.
When testing, pay attention to creating a new folder, and put the shell script and files used for testing into it.
