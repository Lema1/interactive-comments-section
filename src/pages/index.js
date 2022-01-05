import { Fragment } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <Fragment>
      <section className="comments">
        <div className="comments__container">
          <div className="comments__container__header">
            <img
              className="comments__header-img"
              src="/images/avatars/image-juliusomo.png"
              alt=""
            />
            <p className="comments__header-username">Username</p>
            <p className="comments__header-createat">1 month ago</p>
          </div>
          <p className="comments__container-content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quidem quod, iusto qui error tempora aliquid labore. Necessitatibus,
            a aspernatur.
          </p>
          <div className="comments__container-score">
            <button className="comments__score-plus">+</button>
            <p className="comments__score-number">12</p>
            <button className="comments__score-plus">-</button>
          </div>
          <div className="comments__container-reply">
            <button className="comments__reply-btn">Reply</button>
          </div>
        </div>
      </section>
      <section className="comments">
        <div className="comments__container">
          <div className="comments__container__header">
            <img
              className="comments__header-img"
              src="/images/avatars/image-juliusomo.png"
              alt=""
            />
            <p className="comments__header-username">Username</p>
            <p className="comments__header-createat">1 month ago</p>
          </div>
          <p className="comments__container-content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quidem quod, iusto qui error tempora aliquid labore. Necessitatibus,
            a aspernatur.
          </p>
          <div className="comments__container-score">
            <button className="comments__score-plus">+</button>
            <p className="comments__score-number">12</p>
            <button className="comments__score-plus">-</button>
          </div>
          <div className="comments__container-reply">
            <button className="comments__reply-btn">Reply</button>
          </div>
        </div>
        <section className="comments__replies">
          <div className="comments__replies-container">
            <div className="comments__container-header">
              <img src="/images/avatars/image-juliusomo.png" alt="" />
              <p className="comments__header-username">Username</p>
              <p className="comments__header-createat">1 month</p>
            </div>
            <p className="comments__container-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quidem quod, iusto qui error tempora aliquid labore.
              Necessitatibus, a aspernatur.
            </p>
            <div className="comments__container-score">
              <button className="comments__score-plus">+</button>
              <p className="comments__score-number">12</p>
              <button className="comments__score-plus">-</button>
            </div>
            <div className="comments__container-reply">
              <button className="comments__reply-btn">Reply</button>
            </div>
          </div>
          <div className="comments__replies-container">
            <div className="comments__container-header">
              <img src="/images/avatars/image-juliusomo.png" alt="" />
              <p className="comments__header-username">Username</p>
              <p className="comments__header-createat">1 month</p>
            </div>
            <p className="comments__container-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quidem quod, iusto qui error tempora aliquid labore.
              Necessitatibus, a aspernatur.
            </p>
            <div className="comments__container-score">
              <button className="comments__score-plus">+</button>
              <p className="comments__score-number">12</p>
              <button className="comments__score-plus">-</button>
            </div>
            <div className="comments__container-reply">
              <button className="comments__reply-btn">Reply</button>
            </div>
          </div>
        </section>
      </section>

      <section className="comments__new-commnet">
        <textarea
          className="comments__new-commnet-new-text"
          name="textarea"
          placeholder="Add a comment..."
        ></textarea>
        <img src="/images/avatars/image-juliusomo.png" alt="" />
        <button className="comments__new-commnet-send">Send</button>
      </section>
    </Fragment>
  );
}
