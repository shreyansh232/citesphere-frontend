import { useEffect, useState } from "react";
import { CreateContentModal } from "../components/CreateContentModal";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/ui/Sidebar";
import { useContent } from "../hooks/useContent"; // Custom hook to fetch content
function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();

  // useEffect hook to refresh the content whenever the modalOpen state changes
  useEffect(() => {
    refresh();
  }, [modalOpen]);

  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <CreateContentModal
          isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex justify-between gap-4">
          <h1 className="text-3xl font-semibold">All Notes</h1>
          <div className="flex gap-4">
            <Button
              variant="secondary"
              text="Share"
              startIcon={<ShareIcon size="lg" />}
            ></Button>
            <Button
              startIcon={<PlusIcon size="lg" />}
              variant="primary"
              text="Add Content"
              onClick={() => setModalOpen(true)}
            ></Button>
          </div>
        </div>
        <div className="gap-4 flex mt-5">
          {contents.map((content) => (
            <Card
              title={content?.title}
              link={content?.link}
              type={content?.type}
            />
          ))}
          {/* <Card
            title="Tweet"
            link="https://x.com/kirat_tw/status/1910018864534151497"
            type="twitter"
          />
          <Card
            title="Youtube"
            link="https://www.youtube.com/embed/wjZofJX0v4M?si=fFJKn_VWBC_ywoEn"
            type="youtube"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
