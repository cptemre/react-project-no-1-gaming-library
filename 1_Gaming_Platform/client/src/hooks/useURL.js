import { useEffect, useState } from "react";

const useURL = (a) => {
  const [url, setUrl] = useState(document.URL.split("/"));
  const [lastPath, setLastPath] = useState("");
  const [path, setPath] = useState("");
  const [replace, setReplace] = useState("");
  const [platform, setPlatform] = useState("");
  const [subPlatform, setSubPlatform] = useState("");
  const [subPlatformReplace, setSubPlatformReplace] = useState("");
  useEffect(() => {
    setUrl(a.split("/"));
  }, [a]);
  useEffect(() => {
    setLastPath(url[url.length - 1]);
  }, [url]);
  useEffect(() => {
    setPath(lastPath.toUpperCase() + "/");
  }, [lastPath]);
  useEffect(() => {
    setReplace(lastPath.replace(/_/g, " "));
  }, [lastPath]);
  useEffect(() => {
    if (url[3] && url[4]) {
      setPlatform(url[3]);
      setSubPlatform(url[4]);
      setSubPlatformReplace(url[4].replace(/_/g, " ").toUpperCase());
    }
  }, [url]);
  return [
    url,
    lastPath,
    path,
    replace,
    platform,
    subPlatform,
    subPlatformReplace,
  ];
};

export default useURL;
