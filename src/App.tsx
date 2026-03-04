import { useAppStore } from './store/appStore';
import Sidebar from './components/layout/Sidebar';
import RightPane from './components/layout/RightPane';

function App() {
  const sidebarOpen = useAppStore((state) => state.sidebarOpen);

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-0'
        } transition-all duration-300 overflow-hidden border-r bg-background`}
      >
        <Sidebar />
      </aside>

      {/* Right Main Pane */}
      <main
        className={`${
          sidebarOpen ? 'flex-1' : 'w-full'
        } transition-all duration-300`}
      >
        <RightPane />
      </main>
    </div>
  );
}

export default App;