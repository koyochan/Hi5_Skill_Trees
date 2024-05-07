import React from 'react';
import {
  SkillTreeGroup,
  SkillTree,
  SkillProvider,
} from 'beautiful-skill-tree';

const data_of_lego = [
  {
    id: 'Hello-word',
    title: 'Hello World',
    tooltip: {
      content: '最上位ノード',
    },
    children: [
      {
        id: 'hello-sun',
        title: 'Hello Sun',
        tooltip: {
          content: '小ノード',
        },
        children: [
          {
            id: 'hello-Yushi',
            title: 'Hello Yushi',
            tooltip: {
              content: 'こんにちは、ゆーし！',
            },
            children: []
          },
          {
            id: 'hello-minako',
            title: 'Hello Minako',
            tooltip: {
              content: 'こんにちは、みなこさん！',
            },
            children: []
          }
        ],
      },
      {
        id: 'hello-stars',
        title: 'Hello Stars',
        tooltip: {
          content: '小ノード',
        },
        children: [
          {
            id: 'hello-taikai',
            title: 'Hello Taikai',
            tooltip: {
              content: 'こんにちは、大海さん！',
            },
            children: []
          },
          {
            id: 'hello-saika',
            title: 'Hello Saika',
            tooltip: {
              content: 'こんにちは、さいかさん！',
            },
            children: []
          }
        ],
      },
    ],
  },
];


const MySkillTreeComponent = () => {
  return (
    <SkillProvider>
      <SkillTreeGroup>
        {({ skillCount }) => (
          <SkillTree
            treeId="prototype of skill trees"
            title="試作用スキルツリー"
            data={data_of_lego}
            collapsible
            description="Lego Education用のスキルツリー"
          />
        )}
      </SkillTreeGroup>
    </SkillProvider>
  );
};

export default MySkillTreeComponent;
