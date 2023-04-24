# Leetcode 
Leetcode solutions

1. Enter the following commands in terminal:

To pull leetcode-image from the repo indhujasiva

```
docker pull indhujasiva/leetcode-image
```

To build a container with the image; -p binds ports from your host machine(3000) to the container environment(given as EXPOSE 3000 in Dockerfile)

```
docker run -p 3000:3000 --name my-container indhujasiva/leetcode-image
```

2. Once my-container starts running, http://localhost:3000/ opens in default browser.

3. A drop down box appears from which the desired function can be executed by selecting it.

4. The expected inputs of the functions are:

MaxStoredWater - Positive integers separated by comma. Example: 1,8,6,2,5,4,8,3,7

MergeIntervals - Even number of positive integers separated by comma. Example: 1,4,0,4

CountDigitOne - A positive integer. Example: 77823
