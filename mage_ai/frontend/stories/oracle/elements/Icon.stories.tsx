import React from 'react';
import { Meta, Story } from '@storybook/react';

import ThemeBlock from '../../ThemeBlock';
import {
  Action,
  Add,
  AlertCircle,
  Alphabet,
  ArrowDown,
  ArrowDownSplitTwo,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Backfill,
  BackfillV2,
  Batch,
  BatchPipeline,
  Binary,
  BlockGeneric,
  BlocksSeparated,
  BlocksStacked,
  Branch,
  BranchAlt,
  CalendarDate,
  CalendarRounded,
  Callback,
  CaretDown,
  CaretRight,
  Categories,
  Category,
  Charts,
  Chat,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Circle,
  CircleWithArrowUp,
  Clone,
  Close,
  Code,
  Column,
  Copy,
  CubeWithArrowDown,
  Cursor,
  DBT,
  DataIntegrationPipeline,
  DocumentIcon,
  Edit,
  Ellipsis,
  Email,
  Expand,
  File as FileIcon,
  FileFill as FilledFileIcon,
  Filter,
  Folder,
  FrameBoxSelection,
  GitHubIcon,
  Graph,
  GraphWithNodes,
  Group,
  HexagonAll,
  IDLetters,
  Info,
  Input,
  Insights,
  Integration,
  Lightning,
  Logs,
  MapPin,
  Menu,
  Monitor,
  MultiShare,
  NavDashboard,
  NavData,
  NavGraph,
  NavReport,
  NavTree,
  NewBlock,
  NumberHash,
  NumberWithDecimalHash,
  Open,
  ParentEmpty,
  ParentLinked,
  Pause,
  Phone,
  PipeIcon,
  Pipeline,
  PipelineV2,
  PipelineV3,
  PlayButton,
  PowerUps,
  PreviewHidden,
  PreviewOpen,
  RoundedSquare,
  Save,
  Schedule,
  Search,
  Secrets,
  Sensor,
  Settings,
  SettingsWithKnobs,
  Slack,
  Smiley,
  Stack,
  Streaming,
  Sun,
  Switch,
  Table,
  TemplateShapes,
  Terminal,
  TodoList,
  Trash,
  Variables,
  WeekDots,
} from '@oracle/icons';
import EmptyCharts from '@oracle/icons/custom/EmptyCharts';
import Mage8Bit from '@oracle/icons/custom/Mage8Bit';

const ICONS = [
  Action,
  Add,
  AlertCircle,
  Alphabet,
  ArrowDown,
  ArrowDownSplitTwo,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUp,
  Backfill,
  BackfillV2,
  Batch,
  BatchPipeline,
  Binary,
  BlockGeneric,
  BlocksSeparated,
  BlocksStacked,
  Branch,
  BranchAlt,
  CalendarDate,
  CalendarRounded,
  Callback,
  CaretDown,
  CaretRight,
  Categories,
  Category,
  Charts,
  Chat,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Circle,
  CircleWithArrowUp,
  Clone,
  Close,
  Code,
  Column,
  Copy,
  CubeWithArrowDown,
  Cursor,
  DBT,
  DataIntegrationPipeline,
  DocumentIcon,
  Edit,
  Ellipsis,
  Email,
  EmptyCharts,
  Expand,
  FileIcon,
  FilledFileIcon,
  Filter,
  Folder,
  FrameBoxSelection,
  GitHubIcon,
  Graph,
  GraphWithNodes,
  Group,
  HexagonAll,
  IDLetters,
  Info,
  Input,
  Insights,
  Integration,
  Lightning,
  Logs,
  Mage8Bit,
  MapPin,
  Menu,
  Monitor,
  MultiShare,
  NavDashboard,
  NavData,
  NavGraph,
  NavReport,
  NavTree,
  NewBlock,
  NumberHash,
  NumberWithDecimalHash,
  Open,
  ParentEmpty,
  ParentLinked,
  Pause,
  Phone,
  PipeIcon,
  Pipeline,
  PipelineV2,
  PipelineV3,
  PlayButton,
  PowerUps,
  PreviewHidden,
  PreviewOpen,
  RoundedSquare,
  Save,
  Schedule,
  Search,
  Secrets,
  Sensor,
  Settings,
  SettingsWithKnobs,
  Slack,
  Smiley,
  Stack,
  Streaming,
  Sun,
  Switch,
  Table,
  TemplateShapes,
  Terminal,
  TodoList,
  Trash,
  Variables,
  WeekDots,
];

const Icons = () => (
  <>
    {ICONS.map(Icon => (
      <ThemeBlock
        // @ts-ignore
        key={Icon.displayName}
        reducedPadding
        // @ts-ignore
        title={Icon.displayName}
      >
        <Icon />
      </ThemeBlock>
    ))}
  </>
);

export default {
  component: Icons,
  title: 'Oracle/Icons',
} as Meta;

const Template: Story = () => <Icons />;

export const Main = Template.bind({});
