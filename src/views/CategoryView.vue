<template>
  <div>
    <div class="mission">
      <h3 class="mission-title">Club's Mission</h3>
      <p class="mission-info">{{ selectedClub?.description }}</p>
    </div>
    <div class="leaders">
      <h3 class="leaders-title">Club's Leaders</h3>
      <div class="leader-list">
        <div
          class="leader"
          v-for="leader in selectedClub?.leaders"
          :key="leader.id"
        >
          <div class="leader-info">
            <img :src="leader.image" class="leader-image" alt="leader image" />
          </div>
          <div class="leader-data">
            <h3 class="leader-name">{{ leader.name }}</h3>
            <p>{{ leader.institution }}</p>
            <p>{{ leader.score }}</p>
            <p class="leader-extra">{{ leader.extra }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="past_events"
      v-if="selectedClub?.past_events && selectedClub?.past_events.length > 0"
    >
      <h3 class="past_events_title">Past Events</h3>
      <div class="past_events_list">
        <router-link
          :to="{
            name: 'event-images',
            params: {
              club: route.params.club,
              id: event.id,
            },
          }"
          class="past_event"
          v-for="event in selectedClub?.past_events"
          :key="event.id"
        >
          <h3>{{ event.title }}</h3>
          <h6>{{ event.date }}</h6>
          <p>{{ event.description }}</p>
          <router-link
            :to="{
              name: 'event-images',
              params: {
                club: route.params.club,
                id: event.id,
              },
            }"
            class="past_event_more"
          >
            <span>See images</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-images"
              >
                <path d="M16 17h6" />
                <path d="M15 3h6v6" />
                <path d="M11 21H3v-6" />
                <path d="M16 3h3v3" />
                <path d="M11 3H3v6" />
                <path d="m21 3-9 9" />
                <path d="m3 21 9-9" />
              </svg>
            </span>
          </router-link>
        </router-link>
      </div>
    </div>
    <div
      class="mentors"
      v-if="selectedClub?.mentors && selectedClub?.mentors.length > 0"
    >
      <div class="mentors-title">Club's mentors</div>
      <div class="mentors-container">
        <div
          v-for="mentor in selectedClub?.mentors"
          :key="mentor.id"
          class="mentor-card"
        >
          <div class="mentor-image-container">
            <img :src="mentor.image" :alt="mentor.name" class="mentor-image" />
            <div class="mentor-overlay">
              <h3 class="mentor-name">{{ mentor.name }}</h3>
              <p class="mentor-age">{{ mentor.age }} years old</p>
            </div>
          </div>

          <div class="mentor-details">
            <div class="mentor-detail">
              <i class="icon globe"></i>
              <span>{{ mentor.institution }}</span>
            </div>

            <div class="mentor-detail">
              <i class="icon award"></i>
              <span>{{ mentor.score }}</span>
            </div>

            <div class="mentor-detail">
              <i class="icon star"></i>
              <span>{{ mentor.extra }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { clubsData } from "@/data/clubs";
const route = useRoute();
const selectedClub = ref(null);
onMounted(() => {
  selectedClub.value = clubsData[route.params.club];
});
</script>

<style lang="scss" scoped>
.mission {
  margin-top: 30px;
  text-align: center;
  &-title {
    font-size: 34px;
    font-weight: 500;
  }
  &-info {
    line-height: 34px;
    font-size: 18px;
    width: 80%;
    margin: 0 auto;
    margin-top: 20px;
  }
}
.leaders {
  margin-top: 30px;
  text-align: center;
  &-title {
    font-size: 34px;
    font-weight: 500;
    margin-bottom: 25px;
  }
  &-info {
    line-height: 34px;
    font-size: 18px;
    width: 80%;
    margin: 0 auto;
    margin-top: 20px;
  }
  .leader-list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
  .leader {
    display: flex;
    position: relative;
    &-image {
      width: 360px;
      height: 484px;
      object-fit: cover;
    }
    &-data {
      background: white;
      color: black;
      position: absolute;
      bottom: 25px;
      border-radius: 4px;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 10px 0;
    }
    &-extra {
      font-size: 14px;
    }
  }
}

.past_events {
  margin-top: 30px;
  text-align: center;
  &_title {
    font-size: 34px;
    font-weight: 500;
    margin-bottom: 25px;
  }
  &_list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
    padding: 20px;
    max-width: 1200px; /* Set a maximum width */
    margin: 0 auto; /* Center the grid horizontally */
    justify-content: center;
  }
  .past_event {
    position: relative;
    background: linear-gradient(145deg, #f0f0f0, #e0e0e0);
    border-radius: 15px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1),
      -10px -10px 20px rgba(255, 255, 255, 0.8);
    overflow: hidden;
    transition: all 0.3s ease;
    padding: 20px;
    transform-origin: center;
    max-width: 500px;
    margin: 0 auto;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
      box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15),
        -15px -15px 30px rgba(255, 255, 255, 0.9);
      &::before {
        opacity: 1;
      }
    }
    h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: #333;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 3px;
        background: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
      }
    }
    h6 {
      color: #666;
      margin-bottom: 15px;
      font-weight: 300;
    }
    p {
      color: #555;
      line-height: 1.6;
      margin-bottom: 20px;
    }
    &_more {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 10px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      text-decoration: none;
      span {
        &:first-child {
          text-decoration: none;
          color: #2575fc;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.3s ease;
          border: none;
          &:hover {
            color: #6a11cb;
          }
        }
        &:last-child {
          color: #666;
          opacity: 0.7;
          transition: opacity 0.3s ease;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
    &::before {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(
        circle at center,
        rgba(37, 117, 252, 0.2) 0%,
        transparent 70%
      );
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }
  }
}

.mentors {
  margin-top: 30px;
  text-align: center;
  &-title {
    font-size: 34px;
    font-weight: 500;
    margin-bottom: 25px;
  }
}
.mentors-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px; /* Set a maximum width */
  margin: 0 auto; /* Center the grid horizontally */
  justify-content: center;
}

.mentor-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.mentor-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.mentor-image-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%; /* Set the container to a 1:1 aspect ratio */
  overflow: hidden;
}

.mentor-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
}

.mentor-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
}

.mentor-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.mentor-age {
  font-size: 0.9rem;
  opacity: 0.8;
}

.mentor-details {
  padding: 15px;
}

.mentor-detail {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #333;
}

.mentor-detail .icon {
  margin-right: 10px;
  width: 20px;
  height: 20px;
  background-size: cover;
}

.icon.globe {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>');
}

.icon.award {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.89"></polyline></svg>');
}

.icon.star {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>');
}
</style>
