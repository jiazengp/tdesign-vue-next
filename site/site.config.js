export default {
  docs: [
    {
      title: '开始',
      type: 'doc', // 普通文档
      children: [
        {
          title: '说明',
          name: 'explain',
          docType: 'explain',
          path: '/vue-next/components/explain',
          component: () => import('@/README.md'),
        },
        {
          title: '更新日志',
          name: 'changelog',
          docType: 'explain',
          path: '/vue-next/components/changelog',
          component: () => import('@/CHANGELOG.md'),
        },
        {
          title: '组件概览',
          name: 'overview',
          meta: {
            docType: 'explain',
          },
          path: '/vue-next/components/overview',
          component: () => import('@common/docs/web/overview.md'),
        },
      ],
    },
    {
      title: '基础',
      type: 'component', // 组件文档
      children: [
        {
          title: 'Button 按钮',
          name: 'button',
          docType: 'base',
          path: '/vue-next/components/button',
          component: () => import('@/examples/button/button.md'),
        },
        {
          title: 'Divider 分割线',
          name: 'divider',
          docType: 'base',
          path: '/vue-next/components/divider',
          component: () => import('@/examples/divider/divider.md'),
        },
        {
          title: 'Icon 图标',
          name: 'icon',
          docType: 'base',
          path: '/vue-next/components/icon',
          component: () => import('@/examples/icon/icon.md'),
        },
      ],
    },
    {
      title: '布局',
      type: 'component',
      children: [
        {
          title: 'Grid 栅格',
          name: 'grid',
          docType: 'layout',
          path: '/vue-next/components/grid',
          component: () => import('@/examples/grid/grid.md'),
        },
        {
          title: 'Layout 布局',
          name: 'layout',
          docType: 'layout',
          path: '/vue-next/components/layout',
          component: () => import('@/examples/layout/layout.md'),
        },
      ],
    },
    {
      title: '导航',
      type: 'component',
      children: [
        {
          title: 'Affix 固钉',
          name: 'affix',
          meta: {
            docType: 'navigation',
          },
          path: '/vue/components/affix',
          component: () => import('@/examples/affix/affix.md'),
        },
        {
          title: 'Anchor 锚点',
          name: 'anchor',
          docType: 'navigation',
          path: '/vue-next/components/anchor',
          component: () => import('@/examples/anchor/anchor.md'),
        },
        {
          title: 'Breadcrumb 面包屑',
          name: 'breadcrumb',
          docType: 'navigation',
          path: '/vue-next/components/breadcrumb',
          component: () => import('@/examples/breadcrumb/breadcrumb.md'),
        },
        {
          title: 'Dropdown 下拉菜单',
          name: 'dropdown',
          docType: 'navigation',
          path: '/vue-next/components/dropdown',
          component: () => import('@/examples/dropdown/dropdown.md'),
        },
        {
          title: 'Menu 导航菜单',
          name: 'menu',
          docType: 'navigation',
          path: '/vue-next/components/menu',
          component: () => import('@/examples/menu/menu.md'),
        },
        {
          title: 'Pagination 分页',
          name: 'pagination',
          docType: 'navigation',
          path: '/vue-next/components/pagination',
          component: () => import('@/examples/pagination/pagination.md'),
        },
        {
          title: 'Steps 步骤条',
          name: 'steps',
          docType: 'navigation',
          path: '/vue-next/components/steps',
          component: () => import('@/examples/steps/steps.md'),
        },
        {
          title: 'Tabs 选项卡',
          name: 'tabs',
          docType: 'navigation',
          path: '/vue-next/components/tabs',
          component: () => import('@/examples/tabs/tabs.md'),
        },
      ],
    },
    {
      title: '输入',
      type: 'component', // 组件文档
      children: [
        {
          title: 'Cascader 级联组件',
          name: 'cascader',
          meta: {
            docType: 'form',
          },
          path: '/vue/components/cascader',
          component: () => import('@/examples/cascader/cascader.md'),
        },
        {
          title: 'Checkbox 多选框',
          name: 'checkbox',
          docType: 'form',
          path: '/vue-next/components/checkbox',
          component: () => import('@/examples/checkbox/checkbox.md'),
        },
        {
          title: 'DatePicker 日期选择器',
          name: 'date-picker',
          docType: 'form',
          path: '/vue-next/components/date-picker',
          component: () => import('@/examples/date-picker/date-picker.md'),
        },
        {
          title: 'Form 表单',
          name: 'form',
          docType: 'form',
          path: '/vue-next/components/form',
          component: () => import('@/examples/form/form.md'),
        },
        {
          title: 'Input 输入框',
          name: 'input',
          docType: 'form',
          path: '/vue-next/components/input',
          component: () => import('@/examples/input/input.md'),
        },
        {
          title: 'InputNumber 数字输入框',
          name: 'input-number',
          docType: 'form',
          path: '/vue-next/components/input-number',
          component: () => import('@/examples/input-number/input-number.md'),
        },
        {
          title: 'Radio 单选框',
          name: 'radio',
          docType: 'form',
          path: '/vue-next/components/radio',
          component: () => import('@/examples/radio/radio.md'),
        },
        {
          title: 'Select 选择器',
          name: 'select',
          docType: 'form',
          path: '/vue-next/components/select',
          component: () => import('@/examples/select/select.md'),
        },
        {
          title: 'Switch 开关',
          name: 'switch',
          docType: 'form',
          path: '/vue-next/components/switch',
          component: () => import('@/examples/switch/switch.md'),
        },
        {
          title: 'Textarea 多行文本框',
          name: 'textarea',
          docType: 'form',
          path: '/vue-next/components/textarea',
          component: () => import('@/examples/textarea/textarea.md'),
        },
        {
          title: 'Transfer 穿梭框',
          name: 'transfer',
          docType: 'form',
          path: '/vue-next/components/transfer',
          component: () => import('@/examples/transfer/transfer.md'),
        },
        {
          title: 'TimePicker 时间选择器',
          name: 'time-picker',
          docType: 'form',
          path: '/vue-next/components/time-picker',
          component: () => import('@/examples/time-picker/time-picker.md'),
        },
        {
          title: 'TreeSelect 树选择',
          name: 'tree-select',
          docType: 'form',
          path: '/vue-next/components/tree-select',
          component: () => import('@/examples/tree-select/tree-select.md'),
        },
        {
          title: 'Upload 上传',
          name: 'upload',
          docType: 'form',
          path: '/vue-next/components/upload',
          component: () => import('@/examples/upload/upload.md'),
        },
      ],
    },
    {
      title: '数据展示',
      type: 'component', // 组件文档
      children: [
        {
          title: 'Badge 徽标',
          name: 'badge',
          docType: 'data',
          path: '/vue-next/components/badge',
          component: () => import('@/examples/badge/badge.md'),
        },
        {
          title: 'Calendar 日历',
          name: 'calendar',
          docType: 'data',
          path: '/vue-next/components/calendar',
          component: () => import('@/examples/calendar/calendar.md'),
        },
        {
          title: 'List 列表',
          name: 'list',
          docType: 'data',
          path: '/vue-next/components/list',
          component: () => import('@/examples/list/list.md'),
        },
        {
          title: 'Progress 进度条',
          name: 'progress',
          docType: 'data',
          path: '/vue-next/components/progress',
          component: () => import('@/examples/progress/progress.md'),
        },
        {
          title: 'Table 表格',
          name: 'table',
          docType: 'data',
          path: '/vue-next/components/table',
          component: () => import('@/examples/table/table.md'),
        },
        {
          title: 'Tag 标签',
          name: 'tag',
          docType: 'data',
          path: '/vue-next/components/tag',
          component: () => import('@/examples/tag/tag.md'),
        },
        {
          title: 'Tooltip 文字提示',
          name: 'tooltip',
          docType: 'data',
          path: '/vue-next/components/tooltip',
          component: () => import('@/examples/tooltip/tooltip.md'),
        },
        {
          title: 'Tree 树',
          name: 'tree',
          docType: 'data',
          path: '/vue-next/components/tree',
          component: () => import('@/examples/tree/tree.md'),
        },
      ],
    },
    {
      title: '消息提醒',
      type: 'component', // 组件文档
      children: [
        {
          title: 'Alert 警告提醒',
          name: 'alert',
          docType: 'message',
          path: '/vue-next/components/alert',
          component: () => import('@/examples/alert/alert.md'),
        },
        {
          title: 'Dialog 对话框',
          name: 'dialog',
          docType: 'message',
          path: '/vue-next/components/dialog',
          component: () => import('@/examples/dialog/dialog.md'),
        },
        {
          title: 'Drawer 模态抽屉',
          name: 'drawer',
          docType: 'message',
          path: '/vue-next/components/drawer',
          component: () => import('@/examples/drawer/drawer.md'),
        },
        {
          title: 'Loading 加载',
          name: 'loading',
          docType: 'message',
          path: '/vue-next/components/loading',
          component: () => import('@/examples/loading/loading.md'),
        },
        {
          title: 'Message 全局提示',
          name: 'message',
          docType: 'message',
          path: '/vue-next/components/message',
          component: () => import('@/examples/message/message.md'),
        },
        {
          title: 'Notification 消息通知',
          name: 'notification',
          docType: 'message',
          path: '/vue-next/components/notification',
          component: () => import('@/examples/notification/notification.md'),
        },
        {
          title: 'Popconfirm 气泡确认框',
          name: 'popconfirm',
          docType: 'message',
          path: '/vue-next/components/popconfirm',
          component: () => import('@/examples/popconfirm/popconfirm.md'),
        },
        {
          title: 'Popup 弹出层',
          name: 'popup',
          docType: 'message',
          path: '/vue-next/components/popup',
          component: () => import('@/examples/popup/popup.md'),
        },
        {
          title: 'Swiper 轮播框',
          name: 'swiper',
          path: '/vue/components/swiper',
          component: () => import('@/examples/swiper/swiper.md'),
        },
      ],
    },
  ],
};
