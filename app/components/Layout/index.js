import { Layout } from './Layout';
import { LayoutContent } from './LayoutContent';
import { LayoutNavbar } from './LayoutNavbar';
import { LayoutSidebar } from './LayoutSidebar';
import { withPageConfig } from './withPageConfig';
import { setupPage } from './setupPage';
import { PageConfigContext } from './PageConfigContext';
import { LayoutFooter } from './LayoutFooter';

Layout.Sidebar = LayoutSidebar;
Layout.Navbar = LayoutNavbar;
Layout.Content = LayoutContent;
Layout.Footer = LayoutFooter;

const PageConfigProvider = PageConfigContext.Provider;
const PageConfigConsumer = PageConfigContext.Consumer;

export default Layout;
export { withPageConfig, setupPage, PageConfigProvider, PageConfigConsumer };
