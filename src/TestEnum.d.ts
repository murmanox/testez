export namespace TestEnum {
	enum TestStatus {
		Success,
		Failure,
		Skipped,
	}

	enum NodeType {
		Describe,
		It,
		BeforeAll,
		AfterAll,
		BeforeEach,
		AfterEach,
	}

	enum NodeModifier {
		None,
		Skip,
		Focus,
	}
}
