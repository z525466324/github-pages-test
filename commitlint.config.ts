module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // 自定义规则
    "type-enum": [
      2,
      "always",
      [
        "feat", // 新功能
        "fix", // Bug 修复
        "docs", // 文档更新
        "style", // 代码样式调整
        "refactor", // 重构（非功能/修复）
        "test", // 测试相关
        "chore", // 构建/工具/依赖更新
        "perf", // 性能优化
        "ci", // CI/CD 配置
        "revert", // 代码回退
        "wip", // 开发中
      ],
    ],
    "subject-case": [0], // 允许任意大小写
  },
};
