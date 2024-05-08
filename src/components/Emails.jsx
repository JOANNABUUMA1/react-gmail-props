/* eslint-disable react/jsx-key */
import Email from "./Email";

function Emails(props) {
  const { emails, toggleRead, toggleStar, openEmailDetails } = props;

  return (
    <>
      <ul>
        {emails.map((email, index) => (
          <Email
            email={email}
            index={index}
            key={index}
            onChangeRead={toggleRead}
            onChangeStarred={toggleStar}
            open={openEmailDetails}
          />
        ))}
      </ul>
    </>
  );
}
export default Emails;
