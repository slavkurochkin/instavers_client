import React, { useEffect } from "react";
import { Button, Card, Form, Input, Typography } from "antd";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import styles from './styles';
import { createStory, updateStory } from "../../actions/stories";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const { Title } = Typography; 


function ProfileForm({selectedId, setSelectedId}) {
  const story = useSelector((state) => selectedId ? state.stories.find(story => story._id === selectedId) : null);
  
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const user = JSON.parse(localStorage.getItem("profile"));
  const username = user?.result?.username;

  const onSubmit = (formValues) => {
    selectedId ? 
    dispatch(updateStory(selectedId, { ...formValues, username }))
    : dispatch(createStory({ ...formValues, username }));

    reset();
  };

  useEffect(() => {
    if(story) {
      form.setFieldsValue(story);
    }
  }, [story, form]);

  const reset = () => {
    form.resetFields();
    setSelectedId(null);
  }

  if (!user) {
    return (
      <Card style={styles.formCard}>
          <Title level={4}>
            <span style={styles.formTitle}>
            Welcome to instavers!
            </span> <br />
            Please <Link to="/authform">login</Link> or{" "}
            <Link to="/authform">register </Link> for sharing instant moments or ideas.
          </Title>
      </Card>
    );
  }

  return (
   <div>Hello world</div>
  )
}

export default ProfileForm