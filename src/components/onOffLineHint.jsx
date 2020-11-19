import * as React from 'react';
// PWA
import { Offline, Online } from 'react-detect-offline';

export function OnOffLineHint() {
  return (
    <div>
      <Online>
        <p>應用程式已連線</p>
      </Online>
      <Offline>
        <p>離線使用</p>
      </Offline>
    </div>
  );
}
