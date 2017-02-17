import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';

export default function FormSection() {
  return (
    <div className="bs-docs-section">
      <h2 className="page-header">
        <Anchor id="form">Form组件（表单组件）</Anchor> <small><code>&lt;Form&gt;</code></small>
      </h2>

      <p>使用<code>formDefaultData</code>参数可以往表单中传入数据。</p>
      <p>导入方法：<code>{`import { Form } from 'ssc-comp'`}</code></p>
      <ReactPlayground codeText={Samples.FormBasic} />

      <p>调试使用，测试F0rm</p>
      <ReactPlayground codeText={Samples.F0rmBasic} />

      <h3><Anchor id="form-props">属性</Anchor></h3>
      <PropTable component="Form"/>
    </div>
  );
}
