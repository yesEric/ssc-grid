import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';

export default function GridSection() {
  return (
    <div className="bs-docs-section">
      <h3><Anchor id="grid-props">属性</Anchor></h3>
      <PropTable component="Grid"/>
    </div>
  );
}
