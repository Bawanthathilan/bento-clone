interface SiteData {
  siteTitle: string;
  profilePic: string | null;
  yourName: string;
  yourDescription?: string;
}

export const siteData: SiteData = {
  siteTitle: "Bawantha Thilan",
  profilePic: "/profile.jpg",
  yourName: "Bawantha Thilan",
  yourDescription:
    "A professional key presser who turns characters into interesting web things",
};
