import * as React from 'react';
import { Offline, Online } from 'react-detect-offline';

export function OnOffLineHint() {
  return (
    <div style={{ marginTop: '20px' }}>
      <Online>
        <p style={{ color: 'green' }}>應用程式已連線</p>
      </Online>
      <Offline>
        <p style={{ color: 'red' }}>離線使用，你的資料會離線保存</p>
      </Offline>
    </div>
  );
}
