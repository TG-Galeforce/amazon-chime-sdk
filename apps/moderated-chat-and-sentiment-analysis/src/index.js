// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './Chat';

document.addEventListener('DOMContentLoaded', (_event) => {
  ReactDOM.render(<Chat />, document.getElementById('root'));
});
