const data_of_lego = [
  {
    id: 'Hello-word',
    title: 'Hello World',
    tooltip: {
      content: 'このノードは最上位レベルで、アンロックされてクリック可能です。',
    },
    children: [
      {
        id: 'hello-sun',
        title: 'Hello Sun',
        tooltip: {
          content: 'このノードは上位ノードの子で、親が選択状態でないとロックされます。',
        },
        children: [
          {
            id: 'hello-Yushi',
            title: 'Hello Yushi',
            tooltip: {
              content: 'こんにちは、ゆーし！',
            },
            children: [
              {
                id: 'hello-minako',
                title: 'Hello Minako',
                tooltip: {
                  content: 'こんにちは、みなこさん！',
                },
                children: []  // 空の子ノード配列を追加
              }
            ],
          }
        ],
      },
      {
        id: 'hello-stars',
        title: 'Hello Stars',
        tooltip: {
          content: 'このツールは自動的にレイアウトを管理します。だからこれをBeautiful Skill Treeと呼びます。',
        },
        children: [
          {
            id: 'hello-taikai',
            title: 'Hello Taikai',
            tooltip: {
              content: 'こんにちは、大海さん！',
            },
            children: [
              {
                id: 'hello-saika',
                title: 'Hello Saika',
                tooltip: {
                  content: 'こんにちは、さいかさん！',
                },
                children: []  // 空の子ノード配列を追加
              }
            ],
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
            treeId=""
            title="Lego Education"
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
