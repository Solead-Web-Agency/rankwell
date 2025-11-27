import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

const AboutTabList = () => {
  return (
    <>
      {/* Desktop TabList */}
      <TabList variant="desktop">
        <Tab index={0} variant="desktop">
          Decentralization
        </Tab>
        <Tab index={1} variant="desktop">
          Blockchain
        </Tab>
        <Tab index={2} variant="desktop">
          Privacy
        </Tab>
        <Tab index={3} variant="desktop">
          Exchanges
        </Tab>
      </TabList>
      {/* Mobile TabList */}
      <TabList variant="mobile">
        <Tab index={0} variant="mobile">
          Decentralization
        </Tab>
        <Tab index={1} variant="mobile">
          Blockchain
        </Tab>
        <Tab index={2} variant="mobile">
          Privacy
        </Tab>
        <Tab index={3} variant="mobile" className="text-nowrap">
          Exchanges
        </Tab>
      </TabList>
    </>
  );
};

AboutTabList.displayName = 'AboutTabList';
export default AboutTabList;
