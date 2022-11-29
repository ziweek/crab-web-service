import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Logo from "asset/image/logo.png";
import { useRouter } from "next/router";
import * as S from "styles/components/common/modal";
import { Sign } from "crypto";
const Modal: NextPage = (props) => {
  console.log("이거", props.posts);
  const [mainPost, setMainPost] = useState(props.mainPost);
  const [posts, setPosts] = useState(props.posts);
  const sendSetOpenModal = () => {
    props.getSetOpenModal(false);
  };
  const router = useRouter();

  // useEffect(() => {
  //   console.log(mainPost);
  // }, [mainPost]);
  return (
    <S.ModalContainer>
      <S.BarWrapper onClick={sendSetOpenModal} onTouchEnd={sendSetOpenModal}>
        <S.SlideBar></S.SlideBar>
      </S.BarWrapper>
      <S.ModalWrapper>
        <S.HeaderWrapper>
          <S.ProfileWrapper>
            <S.PicBox>
              <img src="https://images.unsplash.com/photo-1600048837842-c175e44ad621?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
            </S.PicBox>
            <S.TitleWrapper>
              <S.Title>{mainPost.author}</S.Title>
              <S.UserID>@{mainPost.author}</S.UserID>
            </S.TitleWrapper>
          </S.ProfileWrapper>
        </S.HeaderWrapper>

        <S.MainPostImg>
          <img src="https://images.unsplash.com/photo-1600048837842-c175e44ad621?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
        </S.MainPostImg>
        <S.Content>{mainPost.content}</S.Content>
        {/* 얘 왜 줄바꿈 적용이 안되지 */}
      </S.ModalWrapper>

      {posts &&
        posts.map((post) => (
          <S.ModalWrapper key={post.id}>
            <S.HeaderWrapper>
              <S.ProfileWrapper>
                <S.PicBox>
                  <img src="https://images.unsplash.com/photo-1600048837842-c175e44ad621?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                </S.PicBox>
                <S.TitleWrapper>
                  <S.Title>{post.author}</S.Title>
                  <S.UserID>@{post.author}</S.UserID>
                </S.TitleWrapper>
              </S.ProfileWrapper>
            </S.HeaderWrapper>

            <S.MainPostImg>
              <img src="https://images.unsplash.com/photo-1600048837842-c175e44ad621?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
            </S.MainPostImg>
            <S.Content>{post.content}</S.Content>
          </S.ModalWrapper>
        ))}
    </S.ModalContainer>
  );
};

export default Modal;
