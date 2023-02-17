<template>
    <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        :mode="mode"
        :theme="theme"
      >
        <a-menu-item key="1">
          <template #icon>
            <MailOutlined />
          </template>
          Navigation One
        </a-menu-item>
        <a-menu-item key="2">
          <template #icon>
            <CalendarOutlined />
          </template>
          Navigation Two
        </a-menu-item>
      </a-menu>
  </template>
  <script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue';
  import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
  } from '@ant-design/icons-vue';
  import type { MenuMode, MenuTheme } from 'ant-design-vue';
  export default defineComponent({
    components: {
      MailOutlined,
      CalendarOutlined,
      AppstoreOutlined,
      SettingOutlined,
    },
    setup() {
      const state = reactive({
        mode: 'inline' as MenuMode,
        theme: 'light' as MenuTheme,
        selectedKeys: ['1'],
        openKeys: ['sub1'],
      });
      return {
        ...toRefs(state)
      };
    },
  });
  </script>