// @flow
import * as React from 'react';
import {Tabs, Tab} from 'baseui/tabs';

export default () => <ControlledTabsStory />;

class ControlledTabsStory extends React.Component<
  {},
  {activeKey: React.Key},
> {
  state = {
    activeKey: '0',
  };

  onChange = ({activeKey}: {activeKey: React.Key}) => {
    this.setState({activeKey});
  };

  render() {
    const content = [
      'Tab Content 1',
      'Tab Content 2',
      'Tab Content 3',
    ];
    return (
      <React.Fragment>
        <Tabs
          activeKey={this.state.activeKey}
          onChange={this.onChange}
        >
          <Tab title="Tab Link 1" />
          <Tab title="Tab Link 2" />
          <Tab title="Tab Link 3" />
        </Tabs>
        <div>Content:</div>
        <div>{content[Number(this.state.activeKey)]}</div>
      </React.Fragment>
    );
  }
}