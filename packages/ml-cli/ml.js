#! /usr/bin/env node
//--inspect-brk

/**
 * /usr/bin/env node  可以让系统动态的去查找node，已解决不同机器不同用户设置不一致问题。
 * nodejs --inspect-brk结合Chrome开发者工具的调试
 */
require('./lib/index.js');

