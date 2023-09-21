package com.sid.server.repository;

import com.sid.server.model.Post;

import java.util.List;

public interface SearchRepository {
    List<Post> findByText(String text);
}
