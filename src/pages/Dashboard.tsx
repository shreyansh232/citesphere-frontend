import { useEffect, useState } from "react";
import { CreateContentModal } from "../components/CreateContentModal";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/ui/Sidebar";
import { useContent } from "../hooks/useContent"; // Custom hook to fetch content
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { contents, refresh } = useContent();
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  // useEffect hook to refresh the content whenever the modalOpen state changes
  useEffect(() => {
    refresh();
  }, [modalOpen]);

  if (!isSignedIn) {
    navigate("/signup")
  }

  return (
    isSignedIn && (
      <div>
        <Sidebar onCollapsedChange={setSidebarCollapsed} />
        <div
          className={`p-4 min-h-screen bg-black transition-all duration-300 ${
            sidebarCollapsed ? "ml-24" : "ml-72"
          } bg-black bg-[radial-gradient(circle_closest-corner_at_100%,_rgba(250,204,21,0.2),_#0000),radial-gradient(circle_closest-corner_at_0%,_rgba(250,204,21,0.2),_#0000)]`}
        >
          <CreateContentModal
            isOpen={modalOpen}
            onClose={() => {
              setModalOpen(false);
            }}
          />
          <div className="flex justify-between gap-4 text-white">
            <h1 className="text-4xl font-medium">All Bookmarks</h1>
            <div className="flex gap-4">
              <Button
                onClick={async () => {
                  // Making a POST request to share the brain content
                  const response = await axios.post(
                    `${BACKEND_URL}/api/v1/brain/share`,
                    {
                      share: true,
                    },
                    {
                      headers: {
                        Authorization: localStorage.getItem("token"), // Passing the authorization token in the request header
                      },
                    }
                  );
                  // Constructing the share URL and alerting the user with the link
                  const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
                  alert(shareUrl);
                }}
                variant="secondary"
                text="Share Vault"
                startIcon={<ShareIcon size="lg" />}
              />
              <Button
                startIcon={<PlusIcon size="lg" />}
                variant="primary"
                text="Add Content"
                onClick={() => setModalOpen(true)}
              ></Button>
            </div>
          </div>
          <div className="gap-5 flex mt-5 flex-wrap">
            {contents.map(({ title, link, type }) => (
              <Card title={title} link={link} type={type} />
            ))}
          </div>
        </div>
      </div>
    )
  );
}

export default Dashboard;
